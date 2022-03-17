import productService from "../services/product.service.js";

async function getAllProducts(req, res) {
    res.send(await productService.getAllProducts());
}

async function getProductByID(req, res) {
    res.send(await productService.getProductByID(req.params.id));
}

export default {
    getAllProducts,
    getProductByID,
};
