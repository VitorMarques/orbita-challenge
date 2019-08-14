module.exports = (app) => {
    var pool = app.config.dbconfig;
    var log = app.config.logconfig;

    const sqlUtil = {
        select: (fields, table, conditions) => {
            const sqlFields = fields ? [...fields] : "*";
            let sql = `SELECT ${sqlFields} FROM ${table} `;
            if (conditions) sql = where(sql, conditions);

            return execute(sql, pool, log);
        },
        insert: async (fields, table, conditions) => {},
        update: async (fields, table, conditions) => {},
        delete: (table, conditions) => {
            let sql = `DELETE FROM ${table}`;
            if (conditions) sql = where(sql, conditions);

            return execute(sql, pool, log);
        }
    };

    return sqlUtil;
};

function where(sql, conditions) {
    let indice = 0;
    for (const condition of conditions) {
        if (indice === 0) {
            sql = sql + ` WHERE ${Object.keys(condition)[0]} = '${Object.values(condition)[0]}'`;
        } else {
            sql = sql + ` AND ${Object.keys(condition)[0]} = '${Object.values(condition)[0]}'`;
        }
        indice++;
    }
    return sql;
}

async function execute(sql, pool, log) {
    try {
        return await pool.query(sql);
    } catch (err) {
        log.error(err);
        throw err;
    }
}
