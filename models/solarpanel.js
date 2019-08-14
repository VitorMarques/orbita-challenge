module.exports = (app) => {
    const sqlUtil = app.util.sqlutil;
    const conn = app.config.dbconfig;

    const table = "solar_data";
    const fields = [
        "provider",
        "installation_dt",
        "system_size",
        "zip_code",
        "state",
        "cost"
    ];
    const rules = [
        {
            state: "ME"
        }
    ];

    const SolarPanelModel = {
        findAll: () => {
            return new Promise((resolve, reject) => {
                try {
                    const results = sqlUtil.execSelect(
                        fields,
                        table,
                        rules,
                        conn
                    );
                    resolve(results);
                } catch (err) {
                    reject(err);
                }
            });
        }
    };

    return SolarPanelModel;
};
