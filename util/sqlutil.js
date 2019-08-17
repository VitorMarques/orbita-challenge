module.exports = (app) => {
    const pool = app.config.dbconfig;
    const log = app.config.logconfig;

    const sqlUtil = {
        select: (fields, table, conditions) => {
            const sqlFields = fields ? [...fields] : "*";
            let sql = `SELECT ${sqlFields} FROM ${table}`;
            if (conditions) sql = where(sql, conditions);

            return execute(sql, pool, log);
        },
        insert: (values, table, fields) => {
            const sql = `INSERT INTO ${table}(${[...fields]}) VALUES(${[...values]})`;

            return execute(sql, pool, log);
        },
        update: (data, table, conditions) => {
            if (!data) return;
            let sql = `UPDATE ${table} `;
            sql = set(sql, data);
            sql = where(sql, conditions);

            return execute(sql, pool, log);
        },
        delete: (table, conditions) => {
            let sql = `DELETE FROM ${table}`;
            if (conditions) sql = where(sql, conditions);

            return execute(sql, pool, log);
        }
    };

    return sqlUtil;
};

function set(sql, data) {
    const fields = Object.keys(data);
    const values = Object.values(data);

    for (let i = 0; i < values.length; i++) {
        if (i === 0) {
            sql = sql + ` SET ${fields[i]} = ${values[i]} `;
        } else {
            sql = sql + ` , ${fields[i]} = ${values[i]} `;
        }
    }
    return sql;
}

function where(sql, conditions) {
    const fields = Object.keys(conditions);
    const values = Object.values(conditions);

    for (let i = 0; i < values.length; i++) {
        if (i === 0) {
            sql = sql + ` WHERE ${fields[i]} = '${values[i]}'`;
        } else {
            sql = sql + ` AND ${fields[i]} = '${values[i]}'`;
        }
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
