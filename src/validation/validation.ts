import { z } from "zod";

export const envSchema = z.object({
  PORT: z.string({ message: "Port number is required" }), 
  NODE_ENV: z.enum(["development", "production", "test"]),
  MONGO_DB_URI: z.string({ message: "Db url is required" }),
});

export type EnvConfig = z.infer<typeof envSchema>;
