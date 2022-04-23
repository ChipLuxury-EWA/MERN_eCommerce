import express from "express";
import routes from "./src/routes/router.js";
import apiErrorHandler from "./src/middlewares/errorHandler.middleware.js";
import { notFound } from "./src/middlewares/notFound.js";

const app = express();
app.use(express.json());

// app.use(express.json) need to be before app.use(routes..)
app.use("/", routes); // v1 api routes


app.use(notFound)
app.use(apiErrorHandler)

export default app;
