const mysql = require("mysql");
const env = require("../constants/environment");

const mysqlOptions = {
    host: env.DATABASE.host,
    port: env.DATABASE.port,
    user: env.DATABASE.username,
    password: env.DATABASE.password,
    database: env.DATABASE.schema
};

const conn = mysql.createConnection(mysqlOptions);

module.exports = conn;
