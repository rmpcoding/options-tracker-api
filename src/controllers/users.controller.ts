import { Request, Response } from "express";

import BaseController from "./base.controller";

import { User } from "../models";

class UsersController extends BaseController {
  constructor() {
    super(User);
  }

  async signup(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const hashedPassword = this.hash(password);

      const newUser = new this.model({
        email,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
      });

      const savedUser = await newUser.save();

      const tokens = await this.jwt.createTokens({
        userId: savedUser._id,
        email: savedUser.email,
      });

      res.status(201).json({
        message: "User Created Successfully",
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
    } catch (error) {
      res.status(500).json({ error: "An error occurred during signup." });
    }
  }

  async login(req: Request, res: Response) {
    try {
      // res.send("Login endpoint is under construction.");
      const { email, password } = req.body;
      const hashedPassword = this.hash(password);

      const findUser = await this.model.findOne({
        email,
        password: hashedPassword,
      });

      if (!findUser) {
        return res.status(401).send("Cannot find user");
      }

      const tokens = await this.jwt.createTokens({
        _id: findUser._id,
        email: findUser.email,
      });

      res.status(200).json({
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
    } catch (error) {
      res.status(500).json({ error: "An error occurred during signup." });
    }
  }

  async me(req: Request, res: Response) {
    try {
      // @ts-ignore
      res.send(req.user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

const usersController = new UsersController();

export default usersController;
