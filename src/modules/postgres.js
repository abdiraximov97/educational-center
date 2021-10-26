const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = async function () {
    try {
        await sequelize.authenticate();
        console.log(`the database is running`)
    } catch (error) {
        console.log("postgres Error:" + error + "");
    }
}