import express from "express";

import api from "../../controllers/product.controller.js";
const router = express.Router();

router
    .route("/")
    .get(api.getAllProducts)
    .post()
    .put()
    .delete();

router
    .route("/:id")
    .get(api.getProductByID)
    .post()
    .put()
    .delete();

export default router;
