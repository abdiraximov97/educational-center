const { CourseCreatePostController } = require("../../controllers/courseController");
const { TeacherUpdatePutController, TeacherCreatePostController } = require("../../controllers/teacherController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const expressFileUpload = require("express-fileupload");

const courseRoute = require("express").Router();

courseRoute.use([authMiddleware, permissionMiddleware]);
courseRoute.post("/", expressFileUpload({
    abortOnLimit: true,
    safeFileNames: true,

}), CourseCreatePostController);


module.exports = courseRoute;