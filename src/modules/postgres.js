const { Sequelize, DataTypes } = require("sequelize");
const sessionModel = require("../models/sessionModel");
const userModel = require("../models/userModel");
const reletions = require("./reletions");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
});

module.exports = async function postgres() {
    try {
        await sequelize.authenticate();

        let db = {};

        db.users = await userModel(sequelize, Sequelize);
        db.sessions = await sessionModel(sequelize, Sequelize);

        await reletions(db);

        await sequelize.sync();

        return db;
    } catch (error) {
        console.log("postgres Error:" + error + "");
    }
}