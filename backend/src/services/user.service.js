import ApiError from "../middlewares/apiError.class.js";
import User from "../models/user.model.js";
import generateToken from "./jwt.service.js";

export const authenticateUserService = async (details) => {
    const { email, password } = details;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        };
    } else {
        throw new Error("אימייל או סיסמא אינם נכונים");
    }
};

export const getUserProfileService = async (id) => {
        const user = await User.findById(id).select(
            "-password -createdAt -updatedAt"
        );
        if (user) {
            return user;
        } else {
            throw new Error("User not found")
        }
};

export const registerUserService = async (details) => {
    const { name, email, password } = details;

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error("user already exists, can't register");
    }
    
    const user = await User.create({
        name,
        email,
        password,
    });

    if (user) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            // token: null//generateToken(user._id),
        };
    }
};
