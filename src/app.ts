import express from "express";
import cors from "cors";
import routes from "./routes";
import bodyParser from "body-parser";
import AppConfig from "./config/AppConfig";
import http from "http";

const API_PREFIX = AppConfig.API_PREFIX;
const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const corsOption = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOption));
app.use(`/${API_PREFIX}`, routes);

export default app;
