const { Sequelize, DataTypes } = require("sequelize");
const permissionModel = require("../../models/permissionModel");
const sessionModel = require("../../models/sessionModel");
const userModel = require("../../models/userModel");
const userPermissionModel = require("../../models/userPermissionModel");
const init = require("./init");
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
        db.permissions = await permissionModel(sequelize, Sequelize);
        db.user_permissions = await userPermissionModel(sequelize, Sequelize);

        await reletions(db);
        await init(db);

        await sequelize.sync({
            force: false,
        });

        return db;
    } catch (error) {
        console.log("postgres Error:" + error + "");
    }
}