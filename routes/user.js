module.exports = (app) => {
    const userController = app.controllers.user;

    app.route("/api/users/")
        .all((request, response, next) => {
            next();
        })
        .get((request, response) => {
            userController.findAll(request, response);
        })
        .post((request, response) => {
            userController.create(request, response);
        });

    app.route("/api/users/:id")
        .all((request, response, next) => {
            next();
        })
        .get((request, response) => {
            userController.findOne(request, response);
        })
        .put((request, response) => {
            userController.update(request, response);
        })
        .delete((request, response) => {
            userController.remove(request, response);
        });
};
