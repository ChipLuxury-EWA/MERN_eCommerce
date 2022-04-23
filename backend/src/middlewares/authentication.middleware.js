import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticateToken = async (req, res, next) => {
    if (req.headers.authorization?.startsWith("Bearer")) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.decodedToken = decodedToken;
            next();
        } catch (error) {
            res.status(401).send("Unauthorized, invalid token");
        }
    } else {
        res.status(401).send("Unauthorized");
    }
};
