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
        create: async (req, res, next) => {
            const solarPanel = Object.values(req.body);
            try {
                const newSolarPanel = await solarPanelModel.create(solarPanel);
                res.set({Location: `${req.url}${newSolarPanel.insertId}`}).sendStatus(201);
            } catch (err) {
                log.error(err);
                next(err);
            }
        },
        update: async (req, res, next) => {
            try {
                const id = parseInt(req.params.id);
                const solarPanel = req.body;
                if (id) {
                    const result = await solarPanelModel.update(solarPanel, id);
                    if (result) res.status(200).json({ok: "registro atualizado com sucesso."});
                } else {
                    throw new TypeError("Favor informar um ID válido.");
                }
            } catch (err) {
                log.error(err);
                next(err);
            }
        },
        delete: async (req, res, next) => {
            try {
                const id = parseInt(req.params.id);
                if (id) {
                    const result = await solarPanelModel.delete(id);
                    if (result) res.status(200).json({ok: "registro removido com sucesso."});
                } else {
                    throw new TypeError("Favor informar um ID válido.");
                }
            } catch (err) {
                log.error(err);
                next(err);
            }
        }
    };

    return SolarPanelController;
};
