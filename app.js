const express = require("express");
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

consign(consignOptions)
    .include("config")
    .then("util")
    .then("middleware")
    .then("models")
    .then("controllers/genericcontroller.js")
    .then("controllers")
    .then("routes")
    .into(app);

module.exports = app;
