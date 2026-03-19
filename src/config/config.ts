// import dotenv from "dotenv";
// import { EnvConfig, envSchema } from "../validation/env.validation";
// import { ZodError } from "zod";
// dotenv.config();

// export const validateEnv = () => {
//   try {
//     const envVars: EnvConfig = envSchema.parse(process.env);
//     return {
//       port: +envVars.PORT,
//       env: envVars.NODE_ENV,
//       MONGO_DB_URI: envVars.MONGO_DB_URI,
//     };
//   } catch (error) {
//     let message = undefined;
//     if (error instanceof ZodError) {
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       message = error.message;
//       // @ts-ignore
//       console.error("Validation failed:", message);
//     } else {
//       // message = error;
//       console.error("Error parsing environment variables:", error?.toString());
//     }
//   }
// };

import dotenv from "dotenv";

// MONGO_DB_URI=
// NODE_ENV=development
// PORT=8080

dotenv.config();

interface IConfig {
  mongoUri: string;
  nodeEnv: string;
  port: number;
  tokenSecret: string;
  refreshTokenSecret: string;
  salt: string
}

const config: IConfig = {
  mongoUri: process.env[`${process.env.NODE_ENV}_MONGO_DB_URI`] as string,
  nodeEnv: process.env.NODE_ENV || "DEV",
  port: parseInt(process.env.PORT || "8080", 10),
  tokenSecret: process.env.TOKEN_SECRET || "REALLY_SECRET",
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || "REALLY_REALLY_SECRET",
  salt: process.env.SALT || "ROB|ERT"
};

export default config;
