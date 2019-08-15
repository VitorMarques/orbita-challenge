module.exports = (app) => {
    const indexController = app.controllers.index;

    app.route("/").get(indexController.index);
};
