import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILED,
} from "../constants/product.constants.js";

import { fetchProducts } from "../../services/products.service.js";

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });

        const products = await fetchProducts();

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: products,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
