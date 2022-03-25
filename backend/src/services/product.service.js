import Product from "../models/product.model.js";
async function getAllProducts() {
    try {
        return await Product.find({});
    } catch (error) {
        console.log(`Error fetching all products`.red.inverse);
    }
}

async function getProductByID(id) {
    try {
        return await Product.findById(id);
    } catch (error) {
        console.log(`Error fetching product ${id}`.red.inverse);
        // throw new Error(`Product ${id} not found `)
        return `Error fetching product ${id}`;
    }
}

export default {
    getAllProducts,
    getProductByID,
};
