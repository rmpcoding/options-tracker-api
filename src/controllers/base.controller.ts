import { Model } from "mongoose";
import { Request, Response } from "express";

import { Stock, User } from "../models";
import jwtUtil from "../utils/jwt/jwt.util";
import { sha256 } from "../utils/hash/sha256";
import config from "../config/config";

abstract class BaseController {
  model: Model<any>;
  jwt: typeof jwtUtil;
  hash: (arg: string) => string;

  constructor(model: Model<any>) {
    this.model = model;
    this.jwt = jwtUtil;
    this.hash = (password: string) => {
      const [left, right] = config.salt.split("|");
      return sha256(left + password + right);
    };
  }

  async create(req: Request, res: Response) {
    try {
      const payload = req.body;
      // @ts-ignore
      payload.createdAt = req.requestTime;
      // @ts-ignore
      payload.updatedAt = req.requestTime;
      payload.deletedAt = null;
      const doc = await this.model.create(payload);
      res.status(201).json({
        data: doc,
        message: "document created successfully",
      });
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async list(req: Request, res: Response) {
    try {
      const docs = await this.model.find();
      const total = docs.length;

      res.status(200).json({
        data: docs,
        total: total,
        page: 1,
      });
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async getById(req: Request, res: Response) {
    try {
      res.send("implmenet feature");
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async update(req: Request, res: Response) {
    try {
      res.send("implmenet feature");
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  async delete(req: Request, res: Response) {
    try {
      res.send("implmenet feature");
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}

export default BaseController;
