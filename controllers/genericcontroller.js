const httpStatus = require("http-status");

module.exports = (app) => {
    const GenericController = {
        formatResponse: (success, status, message) => {
            return {
                success: success,
                status: status,
                message: message
            };
        }
    };

    return GenericController;
};
