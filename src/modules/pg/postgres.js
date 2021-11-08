const { Sequelize } = require("sequelize");
const SessionModel = require("../../models/sessionModel");
const UserModel = require("../../models/userModel");
const CourseModel = require("../../models/courseModel");
const PermissionModel = require("../../models/permissionModel");
const init = require("./init");
const relations = require("./relations");
const UserPermissionModel = require("../../models/userPermissionModel");
const TeachersModel = require("../../models/teacherModel");
const ApplicantModel = require("../../models/applicantModel");
const GroupModel = require("../../models/groupModel");
const GroupStudentsModel = require("../../models/groupStudentsModel");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	logging: false,
});

module.exports = async function postgres() {
	try {
		await sequelize.authenticate();

		let db = {};

		db.users = await UserModel(sequelize, Sequelize);
		db.sessions = await SessionModel(sequelize, Sequelize);
		db.permissions = await PermissionModel(sequelize, Sequelize);
		db.user_permissions = await UserPermissionModel(sequelize, Sequelize);
		db.teachers = await TeachersModel(sequelize, Sequelize);
		db.courses = await CourseModel(sequelize, Sequelize);
		db.applicants = await ApplicantModel(sequelize, Sequelize);
		db.groups = await GroupModel(sequelize, Sequelize);
		db.group_students = await GroupStudentsModel(sequelize, Sequelize);

		await relations(db);

		await init(db);

		await sequelize.sync({ force: false });

		return db;
	} catch (error) {
		console.error("Postgres error:", error);
	}
};