import { CART_ADD_ITEM } from "../constants/cart.constants.js";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(
                (itemInCart) => itemInCart.product === item.product
            );
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((itemInCart) =>
                        itemInCart.product === existItem.product
                            ? item
                            : itemInCart
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        default:
            return state;
    }
};
