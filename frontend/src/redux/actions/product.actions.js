import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILED,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILED,
} from "../constants/product.constants.js";

import {
    fetchProducts,
    fetchProductById,
} from "../../services/products.service.js";

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

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const product = await fetchProductById(id);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
