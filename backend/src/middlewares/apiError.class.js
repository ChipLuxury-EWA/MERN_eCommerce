class ApiError {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
    }

    static badRequest(msg) {
        return new ApiError(400, msg);
    }

    static internalServerError(msg) {
        return new ApiError(500, msg);
    }

    static notFound(msg) {
        return new ApiError(404, msg);
    }
}

export default ApiError