import express from "express";
import routes from "./src/routes/router.js";
import { notFound, errorHandler } from "./src/middlewares/error.middleware.js";

const app = express();

app.use("/", routes); // v1 api routes

app.use(express.json());
app.use(notFound); // send back a 404 error for any unknown api request (when uri does not exist)
app.use(errorHandler); // ERROR handling

export default app;
