module.exports = (app) => {
    const solarPanelModel = app.models.solarpanel;
    const log = app.config.logconfig;

    const SolarPanelController = {
        findAll: async (req, res, next) => {
            try {
                res.json(await solarPanelModel.findAll());
            } catch (err) {
                log.error(err);
                next(err);
            }
        },
        findById: async (req, res, next) => {
            try {
                const id = parseInt(req.params.id);
                if (id) {
                    res.json(await solarPanelModel.findById(id));
                } else {
                    throw new TypeError("Favor informar um ID válido.");
                }
            } catch (err) {
                log.error(err);
                next(err);
            }
        },
        create: (req, res) => {},
        update: (req, res) => {},
        remove: (req, res) => {}
    };

    return SolarPanelController;
};
