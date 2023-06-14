import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";

//- import files
import config from "./config.js";
import appRoutes from "./routes/routes.js";

//- initialization
const app = express();

//- app config
app.set("port", config.PORT);

//- middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(json());

//- routes
app.use(appRoutes);

export default app;
