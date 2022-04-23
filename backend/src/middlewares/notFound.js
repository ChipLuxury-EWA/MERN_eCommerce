import ApiError from "./apiError.class.js";

const notFound = (req, res, next) => {
    next(ApiError.notFound(`Not Found - ${req.originalUrl}`));

};

export {notFound}