module.exports = (app) => {
    const indexController = app.controllers.index;

    app.route("/")
        .all((request, response, next) => {
            //do something generic
            next();
        })
        .get(indexController.index);
};
