module.exports = (app) => {
    const solarPanelModel = app.models.solarpanel;

    const SolarPanelController = {
        findAll: (req, res) => {
            solarPanelModel.findAll().then(
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

    return SolarPanelController;
};
