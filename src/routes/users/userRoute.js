const { SignInController, CreateUserController } = require("../../controllers/userController");

const userRoute = require("express").Router();

userRoute.post("/sign_in", SignInController);
userRoute.post("/account", CreateUserController);

module.exports = userRoute;