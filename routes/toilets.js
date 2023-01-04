const express = require("express");
const app = express();
const sequelize = require("sequelize");
const { Toilet } = require("../models");

app.get("/", async (req, res) => {
    const { r, latitude, longitude } = req.query;

    const radius = r * 1000;
    const location = sequelize.literal(
        `ST_GeomFromText("POINT(${longitude} ${latitude})")`
    );

    const distance = sequelize.fn(
        "ST_Distance_Sphere",
        sequelize.col("toilet.position"),
        location
    );

    const toilets = await Toilet.findAll({
        where: {
            position: sequelize.where(distance, { [sequelize.Op.lte]: radius }),
        },
    });

    res.json(toilets);
});

module.exports = app;
