module.exports = (app) => {
    const solarPanelController = app.controllers.solarpanel;

    app.route("/api/solarpanels/")
        .all((req, res, next) => {
            //verificar permissao??
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
            //verificar permissao??
            next();
        })
        .get((req, res, next) => {
            solarPanelController.findById(req, res, next);
        })
        .put((req, res, next) => {
            solarPanelController.update(req, res, next);
        })
        .delete((req, res, next) => {
            solarPanelController.remove(req, res, next);
        });
};
