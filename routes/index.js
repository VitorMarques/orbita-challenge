const express = require("express");
const router = express.Router();
const usersRoute = require("./users");
const solarPanelRoute = require("./solar-panel");

module.exports = () => {
    router.get("/", function(req, res, next) {
        res.send("Orbita API");
    });

    router.use("/api/users", usersRoute());
    router.use("/api/solar-panel", solarPanelRoute());

    return router;
};
