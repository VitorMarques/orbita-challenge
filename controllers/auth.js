const tokenSecret = require("../security/tokensecret");
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");

module.exports = (app) => {
    const genericController = app.controllers.genericcontroller;
    const userModel = app.models.user;
    const log = app.config.logconfig;

    const authController = {
        login: async (req, res, next) => {
            const email = req.body.email;
            const password = req.body.password;

            if (email && password) {
                try {
                    //decifrar o password
                    const user = await userModel.findByEmailAndPassword(email, password);
                    if (user) {
                        const token = jwt.sign({username: user.name}, tokenSecret.secret, {expiresIn: "12h"});
                        res.status(httpStatus.OK).json({token: token});
                    } else {
                        res.status(httpStatus.FORBIDDEN).json(
                            genericController(false, httpStatus.FORBIDDEN, "Nome de usuario e/ou senha invalidos.")
                        );
                    }
                } catch (err) {
                    log.error(err);
                    next(err);
                }
            } else {
                res.status(httpStatus.BAD_REQUEST).json(
                    genericController.formatResponse(
                        false,
                        httpStatus.BAD_REQUEST,
                        "Os campos email e senha precisam ser informados."
                    )
                );
            }
        },
        logout: async (req, res, next) => {
            /*try {
                const id = parseInt(req.params.id);
                if (id) {
                    const result = await userModel.delete(id);
                    if (result)
                        res.status(httpStatus.OK).json(
                            genericController.formatResponse(true, httpStatus.OK, "registro removido com sucesso.")
                        );
                } else {
                    throw new TypeError("Favor informar um ID válido.");
                }
            } catch (err) {
                log.error(err);
                next(err);
            }*/
        }
    };

    return authController;
};
