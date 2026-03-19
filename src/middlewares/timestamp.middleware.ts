import { Request, Response, NextFunction } from "express";

const timestampMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  req.requestTime = new Date().toISOString();
  next();
};

export default timestampMiddleware;

// res.status(404);
// const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
// next(error);
