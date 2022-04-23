import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from "../constants/user.constants";

import { loginUser } from "../../services/user.service.js";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const loggedUserData = await loginUser(email, password);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: loggedUserData,
        });

        localStorage.setItem("userInfo", JSON.stringify(loggedUserData));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
