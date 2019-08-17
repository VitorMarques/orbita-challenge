module.exports = (app) => {
    const userModel = app.models.user;
    const log = app.config.logconfig;
    const httpStatus = require("http-status");

    const userController = {
        findById: async (req, res, next) => {
            const id = parseInt(req.params.id);
            try {
                if (id) {
                    res.json(await userModel.findById(id));
                } else {
                    throw new TypeError("Favor informar um ID válido.");
                }
            } catch (err) {
                log.error(err);
                next(err);
            }
        },
        create: async (req, res, next) => {
            const user = Object.values(req.body);
            try {
                const newUser = await userModel.create(user);
                res.set({Location: `${req.url}${newUser.insertId}`}).sendStatus(httpStatus.CREATED);
            } catch (err) {
                log.error(err);
                next(err);
            }
        },
        delete: async (req, res, next) => {
            try {
                const id = parseInt(req.params.id);
                if (id) {
                    const result = await userModel.delete(id);
                    if (result) res.status(httpStatus.OK).json({ok: "registro removido com sucesso."});
                } else {
                    throw new TypeError("Favor informar um ID válido.");
                }
            } catch (err) {
                log.error(err);
                next(err);
            }
        }
    };

    return userController;
};
