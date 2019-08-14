const mysql = require("mysql");
const log = require("./logconfig");
const env = require("../constants/environment");
let singletonConnection;

const mysqlOptions = {
    host: env.DATABASE.host,
    port: env.DATABASE.port,
    user: env.DATABASE.username,
    password: env.DATABASE.password,
    database: env.DATABASE.schema
};

module.exports = () => {
    if (!singletonConnection) {
        singletonConnection = mysql.createConnection(mysqlOptions);
        log.info("Conexao com o MySql iniciada com sucesso.");
    }
    return singletonConnection;
};
