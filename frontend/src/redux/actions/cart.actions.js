import { CART_ADD_ITEM } from "../constants/cart.constants";
import { fetchProductById } from "../../services/products.service.js";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const product = await fetchProductById(id);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: product._id,
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            quantity: quantity,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};
