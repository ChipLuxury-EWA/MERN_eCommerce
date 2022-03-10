import express from "express";
import products from "../../../data/menu.js";

const router = express.Router();

router
    .route("/products")
    .get((req, res) => res.send(products))
    .post()
    .put()
    .delete();

router
    .route("/products/:id")
    .get((req, res) => {
        const product = products.find(p => p._id === req.params.id)
        res.send(product)
    })
    .post()
    .put()
    .delete();

export default router;
