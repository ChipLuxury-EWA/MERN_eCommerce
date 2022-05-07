import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from "../constants/user.constants";

import { loginUser, registerUser } from "../../services/user.service.js";

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

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        });

        const registeredUserData = await registerUser(name, email, password);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: registeredUserData,
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: registeredUserData,
        });

        localStorage.setItem("userInfo", JSON.stringify(registeredUserData));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
};
