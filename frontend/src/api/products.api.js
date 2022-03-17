import axios from "axios";

const fetchProducts = async () => {
    const {data} = await axios.get(`/products`);
    return data;
};

const fetchProductById = async (id) => {
    const {data} = await axios.get(`/products/${id}`);
    return data;
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    fetchProducts,
    fetchProductById,
};
