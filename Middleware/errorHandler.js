const { constants } = require("../constants");

const customerrorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",      
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",     
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack
            })
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack
            })
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stack: process.env.NODE_ENV === 'production' ? null : err.stack
            })
        default:
            console.log("No Error, All Good")
            break;
    }
};

module.exports = customerrorHandler