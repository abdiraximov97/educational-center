const { SignInValidation } = require("../modules/validations");
const { createToken } = require("../modules/jwt");

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
                },
                raw: true,
            });

            console.log(user);

            if (!user) throw new res.error(400, "User not found");

            await req.db.session.destroy({
                session_useragent: req.headers["user-agent"] || "Unknown",
                user_id: user.user_id,
            });

            const session = await req.db.session.create({
                session_useragent: req.headers["user-agent"] || "Unknown",
                user_id: user.user_id,
            }, {
                raw: true,
            });

            const token = await createToken({
                session_id: session.dataValues.session_id,
            })

            res.status(201).json({
                ok: true,
                message: "Token created seccessfully",
                data: {
                    token,
                }
            })
            console.log(session);
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