module.exports = (app) => {
    const sqlUtil = app.util.sqlutil;

    const GenericModel = {
        find: (select, table, where) => {
            return new Promise((resolve, reject) => {
                try {
                    const results = sqlUtil.select(select, table, where);
                    resolve(results);
                } catch (err) {
                    reject(err);
                }
            });
        },
        create: (entity, table, fields) => {
            return new Promise((resolve, reject) => {
                if (fields[0] === "id") fields.splice(0, 1) /*remove the id field*/;
                try {
                    const result = sqlUtil.insert(entity, table, fields);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        },
        update: (entity, table, where) => {
            return new Promise((resolve, reject) => {
                try {
                    const result = sqlUtil.update(entity, table, where);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        },
        delete: (table, where) => {
            return new Promise((resolve, reject) => {
                try {
                    const result = sqlUtil.delete(table, where);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        }
    };
    return GenericModel;
};
