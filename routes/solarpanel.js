module.exports = (app) => {
    const solarPanelController = app.controllers.solarpanel;
    const tokenValidator = app.middleware.tokenvalidator;

    app.route("/api/solarpanels/")
        .all((req, res, next) => {
            //tokenValidator.validate(req, res, next);
            next();
        })
        .get((req, res, next) => {
            solarPanelController.findAll(req, res, next);
        })
        .post((req, res, next) => {
            solarPanelController.create(req, res, next);
        });

    app.route("/api/solarpanels/:id")
        .all((req, res, next) => {
            //tokenValidator.validate(req, res, next);
            next();
        })
        .get((req, res, next) => {
            solarPanelController.findById(req, res, next);
        })
        .put((req, res, next) => {
            solarPanelController.update(req, res, next);
        })
        .delete((req, res, next) => {
            solarPanelController.delete(req, res, next);
        });
};
