const { build } = require("joi");
const { Sequelize } = require("sequelize");
const userModel = require("../models/userModel");
const reletion = require("./reletion");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
});

module.exports = async function postgres() {
    try {
        await sequelize.authenticate();

        let db = {};

        db.users = await userModel(sequelize, Sequelize);

        reletion

        return db;
    } catch (error) {
        console.log("postgres Error:" + error + "");
    }
}