module.exports = (app) => {
    const authController = app.controllers.auth;

    app.route("/login").post((request, response, next) => {
        authController.login(request, response, next);
    });

    app.route("/logout").get((request, response, next) => {
        authController.logout(request, response, next);
    });
};
