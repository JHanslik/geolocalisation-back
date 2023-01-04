const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Toilet = sequelize.define("Toilet", {
        type: {
            type: DataTypes.STRING,
        },
        acces_pmr: {
            type: DataTypes.STRING,
        },
        horaire: {
            type: DataTypes.STRING,
        },
        adresse: {
            type: DataTypes.STRING,
        },
        arrondissement: {
            type: DataTypes.STRING,
        },
        position: {
            type: DataTypes.GEOMETRY,
        },
    });

    return Toilet;
};
