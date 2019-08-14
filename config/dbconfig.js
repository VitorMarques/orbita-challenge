const mysql = require("mysql");
const util = require("util");
const log = require("./logconfig");
const env = require("../constants/environment");

const mysqlOptions = {
    connectionLimit: env.DATABASE.poolSize,
    host: env.DATABASE.host,
    user: env.DATABASE.username,
    password: env.DATABASE.password,
    database: env.DATABASE.schema
};

const pool = mysql.createPool(mysqlOptions);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            log.error("Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            log.error("Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
            log.error("Database connection was refused.");
        }
    }

    if (connection) connection.release();

    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
