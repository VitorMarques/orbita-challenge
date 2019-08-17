const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const tokenSecret = require("../security/tokensecret");

const validate = (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    if (token) {
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length); // Remove Bearer da string
        }
        jwt.verify(token, tokenSecret.secret, (err, decoded) => {
            if (err) {
                return res.status(httpStatus.UNAUTHORIZED).json({
                    success: false,
                    status: httpStatus.UNAUTHORIZED,
                    message: "Token invalido!"
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(httpStatus.UNAUTHORIZED).json({
            success: false,
            status: httpStatus.UNAUTHORIZED,
            message: "Token de autenticacao nao informado."
        });
    }
};

module.exports = {
    validate: validate
};
