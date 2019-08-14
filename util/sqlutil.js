module.exports = () => {
    const sqlUtil = {
        execSelect: (fields, table, params, conn) => {
            if (conn) conn.connect((err) => console.error(err));

            let sql = `SELECT ${[...fields]} FROM ${table} `;
            if (params) sql = addParamsToQuery(sql, params);

            conn.query(sql, (err, results) => {
                if (err) throw err;
                conn.end();
                return results;
            });
        }
    };

    return sqlUtil;
};

function addParamsToQuery(sql, params) {
    let indice = 0;
    for (const param of params) {
        if (indice === 0) {
            sql =
                sql +
                " WHERE " +
                Object.keys(param)[0] +
                " = '" +
                Object.values(param)[0] +
                "'";
        } else {
            sql =
                sql +
                " AND " +
                Object.keys(param)[0] +
                " = '" +
                Object.values(param)[0] +
                "'";
        }
        indice++;
    }
    return sql;
}
