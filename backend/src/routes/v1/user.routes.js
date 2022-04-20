import express from "express";

import { authenticateUser } from "../../controllers/user.controller.js";
const router = express.Router();

router
    .route("/")
    .get()
    .post(authenticateUser)
    .put()
    .delete();

router
    .route("/:id")
    .get()
    .post()
    .put()
    .delete();

export default router;
