const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("paris_toilets", "root", "root", {
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to db");
    } catch (e) {
        console.log(e);
    }
};

connectDb();

const Toilet = require("./toilets")(sequelize);

sequelize.sync({ alter: true });

const db = {
    sequelize,
    Toilet,
};

module.exports = db;
