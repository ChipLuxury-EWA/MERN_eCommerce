import User from "../models/user.model.js";

export const authenticateUserService = async (details) => {
    try {
        const { email, password } = details;
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            return {
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: null,
            };
        } else {
            return "Invalid email or password";
        }
    } catch (error) {
        //TODO: learn how to add res.status to services
        console.log("user service auth error", error);
        return error;
    }
};
