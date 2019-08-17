module.exports = (app) => {
    const genericModel = app.models.genericmodel;

    const table = "solar_data";
    const fields = ["id", "provider", "installation_dt", "system_size", "zip_code", "state", "cost"];
    const rules = {state: "FL"};

    const SolarPanelModel = {
        findAll: () => {
            return genericModel.find(fields, table, rules);
        },
        findById: (paramId) => {
            return genericModel.find(fields, table, {id: paramId});
        },
        create: (solarPanel) => {
            return genericModel.create(solarPanel, table, fields);
        },
        update: (solarPanel, paramId) => {
            return genericModel.update(solarPanel, table, {id: paramId});
        },
        delete: (paramId) => {
            return genericModel.delete(table, {id: paramId});
        }
    };

    return SolarPanelModel;
};
