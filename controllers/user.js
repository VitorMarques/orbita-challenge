module.exports = (app) => {
    const userModel = app.models.user;

    const userController = {
        findAll: (req, res) => {
            userModel.findAll().then(
                (data) => {
                    res.json(data);
                },
                (err) => {
                    throw err;
                }
            );
        },
        findOne: (req, res) => {},
        create: (req, res) => {},
        update: (req, res) => {},
        remove: (req, res) => {}
    };

    return userController;
};
