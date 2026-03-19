// src/types/express.d.ts or similar declaration file
import { Request } from "express";

// Define custom interfaces for properties you want to add to the Request object
export interface User {
  // Define user properties here
}

// Extend the Express Request interface
declare global {
  namespace Express {
    interface Request {
      user?: User; // Example: user object added by authentication middleware
      requestTime: string;
    }
  }
}
