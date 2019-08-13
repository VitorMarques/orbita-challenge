const express = require("express");
const path = require("path");
const routes = require("./routes");
const consign = require("consign");
const consignOptions = {
    cwd: process.cwd(),
    locale: "pt-br",
    verbose: true,
    logger: console
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", routes());

consign(consignOptions)
    .include("config")
    .then("models")
    .then("controllers")
    .into(app);

module.exports = app;
