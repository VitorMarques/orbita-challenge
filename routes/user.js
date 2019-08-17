module.exports = (app) => {
    const userController = app.controllers.user;

    app.route("/api/user/")
        .get((request, response, next) => {
            userController.findById(request, response, next);
        })
        .post((request, response, next) => {
            userController.create(request, response, next);
        })
        .delete((request, response, next) => {
            userController.delete(request, response, next);
        });
};
