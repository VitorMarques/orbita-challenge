const readline = require("readline");
const mysql = require("mysql");
//const db = require("../config/dbConfig");
const fs = require("fs");
const path = require("path");

var pool = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "orbita_challenge"
});

const insertSql =
    "INSERT INTO solar_data(provider, installation_dt, system_size, zip_code, state, cost) values ? ";

var readInterface = readline.createInterface({
    input: fs.createReadStream(path.resolve("C:\\solar_data_values.txt"))
});

readInterface.on("line", (line) => {
    console.log(`Inserindo registro ${line.replace(",", "")}`);
    insereDados(line);
});

function insereDados(values = []) {
    pool.getConnection((err, connection) => {
        if (values.length > 0) {
            connection.query(insertSql, values, (err, res) => {
                connection.release();
                if (err) return console.log(err);
            });
        }
    });
}
