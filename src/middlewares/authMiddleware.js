const { verifyToken } = require("../modules/jwt");

module.exports = async function AuthMiddleware(req, res) {
    try {
        let token = req.headers["authorization"];
        if (!token) {
            throw new res.error(401, "Token is not found");
            return;
        };

        token = verifyToken(token);

        if (!token) {
            throw new res.error(401, "Token is invalid");
        };

        const session = await req.db.session.findOne({
            where: {
                session_id: token.session_id,
            },
            include: req.db.users,
            raw: true,
        });

        if (!session) {
            throw new res.error(401, "session not found");
        }

        req.session = session;
        next();
    } catch (error) {
        console.log("AuthMiddleware error: " + error + "");
        next(error);
    }
}