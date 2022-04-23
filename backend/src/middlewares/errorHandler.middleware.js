import ApiError from "./apiError.class.js";

const apiErrorHandler = (err, req, res, next) => {
    console.log("Handling error");
    if (err instanceof ApiError) {
        console.log(err.statusCode, err.message);
        res.status(err.statusCode).send({ message: err.message });
        return;
    }

    res.status(500).send({ message: "General server error" });
};

export default apiErrorHandler;
