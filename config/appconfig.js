const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const log = require("./logconfig");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const env = require("../constants/environment");

const loggerOptions = {
    loggerstream: {
        write: (message) => {
            log.info(message);
        }
    }
};

const corsOptions = {
    origin: env.CORS_OPTIONS.origin,
    methods: env.CORS_OPTIONS.methods,
    allowedHeaders: env.CORS_OPTIONS.allowedHeaders
};

module.exports = (app) => {
    app.use(helmet());
    app.use(cors(corsOptions));
    app.use(compression());
    app.use(cookieParser());
    app.use(morgan(env.LOG_FORMAT.http, loggerOptions));
    app.use((request, response, next) => {
        delete request.body.id;
        next();
    });
};
