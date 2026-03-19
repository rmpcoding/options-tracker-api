import mongoose from "mongoose";

import config from "../config";

// maybe refactor to use async/await instead of .then/.catch for better readability
export default async function connectDB(appListen: () => void) {
  let server;

  try {
    await mongoose.connect(config.mongoUri);
    console.log("MongoDB connected successfully");
    server = appListen();
  } catch (error) {
    console.error("MongoDB connection error:", error);
  } finally {
    console.log("MongoDB connection attempt finished");
  }

  return server;
}
