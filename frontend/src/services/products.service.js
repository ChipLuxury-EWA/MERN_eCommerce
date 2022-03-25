import axios from "axios";

const fetchProducts = async () => {
    const { data } = await axios.get(`/products`);
    return data;
};

const fetchProductById = async (id) => {
    const { data } = await axios.get(`/products/${id}`);
    if (typeof data === "string" && data.split(" ")[0] === "Error") {
        console.log(data);
        return {name: "Item not found"}
    }
    return data;
};

export {
    fetchProducts,
    fetchProductById,
};
