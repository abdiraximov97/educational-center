const { SignInValidation } = require("../modules/validations");

module.exports = class UserController {
    static async SignInController(req, res, next) {
        try {
            const { username, password } = await SignInValidation(
                req.body,
                res.error
            );

            const user = await req.db.users.findOne({
                where: {
                    user_username: username,
                }
            });

            console.log(user);
        } catch (error) {
            console.log("SignInController Error: " + error + "");
            next(error);
        }
    }

    static async CreateUserController(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }
};