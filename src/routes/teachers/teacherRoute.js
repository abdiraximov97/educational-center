const { TeacherCreatePostController, TeacherUpdatePutController, TeacherGetController } = require("../../controllers/teacherController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const teacherRoute = require("express").Router();

teacherRoute.use([authMiddleware, permissionMiddleware]);

teacherRoute.post("/", TeacherCreatePostController);
teacherRoute.put("/:teacher_id", TeacherUpdatePutController);
teacherRoute.get("/", TeacherGetController);

module.exports = teacherRoute;