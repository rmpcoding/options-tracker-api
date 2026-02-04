import routes from "./routes";
import { errorHandler, notFound } from "./middleware/middleware.js";

import bodyParser from "body-parser";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cookieParser());

app.use(routes);

app.use(notFound);
app.use(errorHandler);

export default app;
