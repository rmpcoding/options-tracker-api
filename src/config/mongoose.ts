// import { connect, set } from "mongoose";
// import './env.config'

// const MONGO_DB_URI =
//   process.env.MONGO_DB_URI || "mongodb://127.0.0.1:27017/options-tracker-db";
// const ENV = process.env.NODE_ENV;

// if (!MONGO_DB_URI && ENV !== "production") {
//   throw new Error(`MONGODB URI is not set`);
// }

// export const connectToDB = async () => {
//   try {
//     set("strictQuery", false);
//     const db = await connect(MONGO_DB_URI);
//     console.log(`🛢  MongoDB connected to ${db.connection.name} 🛢`);
//   } catch (error) {
//     throw new Error(`DB connection error: ${error}`);
//   }
// };

// import mongoose from "mongoose";

// import config from "./config";

// // maybe refactor to use async/await instead of .then/.catch for better readability
// export default function connectDB(appListen: () => void) {
//   mongoose
//     .connect(config.mongoUri, {})
//     .then(() => {
//       console.log("MongoDB connected successfully");
//       appListen();
//     })
//     .catch((err) => {
//       console.error("MongoDB connection error:", err);
//     })
//     .finally(() => {
//       console.log("MongoDB connection attempt finished");
//     });
// }
