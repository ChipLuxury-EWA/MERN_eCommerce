import ApiError from "../middlewares/apiError.class.js";

import {
    authenticateUserService,
    getUserProfileService,
    registerUserService,
    updateUserProfileService,
} from "../services/user.service.js";

export const authenticateUser = async (req, res, next) => {
    try {
        res.send(await authenticateUserService(req.body));
    } catch (error) {
        next(ApiError.badRequest(error.message));
    }
};

export const getUserProfile = async (req, res, next) => {
    try {
        res.send(await getUserProfileService(req.decodedToken.id));
    } catch (error) {
        next(ApiError.notFound(error.message));
    }
};

export const updateUserProfile = async (req, res, next) => {
    try {
        res.send(await updateUserProfileService(req.decodedToken.id, req.body));
    } catch (error) {
        next(ApiError.notFound(error.message));
    }
};

export const registerUser = async (req, res, next) => {
    try {
        res.send(await registerUserService(req.body));
    } catch (error) {
        next(ApiError.badRequest(error.message));
    }
};
