module.exports = (app) => {
    const sqlUtil = app.util.sqlutil;

    const table = "solar_data";
    const fields = ["id", "provider", "installation_dt", "system_size", "zip_code", "state", "cost"];
    const rules = [{state: "FL"}];

    const SolarPanelModel = {
        findAll: () => {
            return new Promise((resolve, reject) => {
                try {
                    const results = sqlUtil.select(fields, table, rules);
                    resolve(results);
                } catch (err) {
                    reject(err);
                }
            });
        },
        findById: (paramId) => {
            return new Promise((resolve, reject) => {
                try {
                    const result = sqlUtil.select(null, table, [{id: paramId}]);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        }
    };

    return SolarPanelModel;
};
