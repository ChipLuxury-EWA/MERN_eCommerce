import express from "express";
import routes from './src/routes/router.js'
const app = express();

app.use(express.json());

// v1 api routes
app.use("/", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(console.log("Not found"), res.send("Great Old 404"));
});

export default app;
