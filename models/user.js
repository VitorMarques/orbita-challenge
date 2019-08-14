module.exports = (app) => {
    const sqlUtil = app.util.sqlutil;

    const table = "user";
    const fields = ["id", "nome", "email", "state"];
    const rules = [];

    const UserModel = {
        findAll: () => {
            return new Promise((resolve, reject) => {
                try {
                    const results = sqlUtil.execSelect(fields, table, rules);
                    resolve(results);
                } catch (err) {
                    reject(err);
                }
            });
        }
    };

    return UserModel;
};
