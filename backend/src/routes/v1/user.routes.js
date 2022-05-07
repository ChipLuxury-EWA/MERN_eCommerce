import express from "express";

import {
    authenticateUser,
    getUserProfile,
    registerUser,
    updateUserProfile,
} from "../../controllers/user.controller.js";
import { authenticateToken } from "../../middlewares/authentication.middleware.js";

const router = express.Router();

router.route("/")
    .get()
    .post(registerUser)
    .put()
    .delete();

router.route("/login")
    .get()
    .post(authenticateUser)
    .put()
    .delete();

router.route("/profile")
    .get(authenticateToken, getUserProfile)
    .post()
    .put(authenticateToken, updateUserProfile)
    .delete();

export default router;
