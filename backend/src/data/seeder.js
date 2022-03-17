import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import users from "./users.js";
import products from "./menu.js";

import User from "../models/user.model.js";
import Product from "../models/product.model.js";
import Order from "../models/order.model.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Seeder is connected to mongo!".bgBlue);
    if (process.argv[2] === "-D") {
        destroyData();
    } else {
        importData();
    }
});

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminID = createdUsers[0]._id;
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminID };
        });
        await Product.insertMany(sampleProducts);
        console.log(`The seed has been implanted!`.bgBlue);
        process.exit();
    } catch (error) {
        console.error(`${error}`.bgRed.black);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        // TODO: ask omer about adding some .then or if answer === 200
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log(`Data destroyed!`.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.bgRed.black);
        process.exit(1);
    }
};
