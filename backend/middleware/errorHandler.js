const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
    switch (res.statusCode) {
        case constants.VALIDATION_ERROR:
            return res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack
            });

        case constants.BAD_REQUEST:
            return res.json({
                title: "Bad Request",
                message: err.message,
                stackTrace: err.stack
            });

        case constants.SERVER_ERROR:
            return res.json({
                title: "Internal Server Error",
                message: `There was an internal server error. Please try again later.`,
            });

        case constants.UNAUTHORIZED:
            return res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });

        case constants.FORBIDDEN:
            return res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });

    }
};

module.exports = errorHandler;
