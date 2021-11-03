const { Sequelize, DataTypes } = require("sequelize");
const courseModel = require("../../models/courseModel");
const permissionModel = require("../../models/permissionModel");
const sessionModel = require("../../models/sessionModel");
const teacherModel = require("../../models/teacherModel");
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
        db.teachers = await teacherModel(sequelize, Sequelize);
        db.courses = await courseModel(sequelize, Sequelize);

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