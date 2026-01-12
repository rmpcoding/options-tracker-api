import type { NextFunction, Request, Response } from "express";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
};

// TODO: abstract into its own error class
interface tempError {
  statusCode: number;
  message: string;
  stack: string;
}

export const errorHandler = (
  err: tempError, // TODO: abstract into its own error class
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || err.statusCode || 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });

  next(err);
};
