import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";

dotenv.config();

let server;
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB (Atlas)".bgBlue);
    server = app.listen(PORT, () => {
        console.log(
            `Server is up and running in ${process.env.NODE_ENV} mode on port: ${PORT}!`
                .bgBlue,
            `\n`,
            "\xA9 Tom Portugez \xA9".trap.underline
        );
    });
});