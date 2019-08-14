module.exports = (app) => {
    const solarPanelController = app.controllers.solarpanel;

    app.route("/api/solarpanels/")
        .all((request, response, next) => {
            next();
        })
        .get((request, response) => {
            solarPanelController.findAll(request, response);
        })
        .post((request, response) => {
            solarPanelController.create(request, response);
        });

    app.route("/api/solarpanels/:id")
        .all((request, response, next) => {
            next();
        })
        .get((request, response) => {
            solarPanelController.findOne(request, response);
        })
        .put((request, response) => {
            solarPanelController.update(request, response);
        })
        .delete((request, response) => {
            solarPanelController.remove(request, response);
        });
};
