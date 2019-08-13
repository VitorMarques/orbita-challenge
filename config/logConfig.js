const winston = require("winston");

module.exports = new winston.createLogger({
    transports: [
        new winston.transports.File({
            level: "debug",
            filename: "logs/orbita-challenge.log",
            maxsize: 1048576,
            json: false,
            handleExceptions: true,
            maxFiles: 10
        }),
        new winston.transports.Console({
            level: "info",
            json: false,
            handleExceptions: true,
            colorized: true
        })
    ],
    exitOnError: false,
    level: "info"
});
