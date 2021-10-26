const { SignInController } = require("../../controllers/userController");

const userRoute = require("express").Router();

userRoute.post("sign_in", SignInController);

module.exports = userRoute;