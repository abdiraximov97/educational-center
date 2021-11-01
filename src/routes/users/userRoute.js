const { SignInController, CreateUserController, UserGetController } = require("../../controllers/userController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const userRoute = require("express").Router();

userRoute.post("/sign_in", SignInController);
userRoute.post("/account", [authMiddleware, permissionMiddleware], CreateUserController);

userRoute.get("/", [authMiddleware, permissionMiddleware], UserGetController)

module.exports = userRoute;