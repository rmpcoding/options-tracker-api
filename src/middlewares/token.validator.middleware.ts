import { Request, Response, NextFunction } from "express";

import jwtUtil from "../utils/jwt/jwt.util";

export default async function tokenValidator(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const accessToken = req.headers["authorization"]?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = await jwtUtil.verifyAccessToken(accessToken);

  // @ts-ignore
  req.user = decoded;

  next();
}
