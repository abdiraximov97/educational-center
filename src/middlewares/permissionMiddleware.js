module.exports = async function PermissionMiddleware(req, res) {
    try {
        const permissions = await req.db.user_permissions.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: req.db.permission,
            raw: true,
        });

        req.permissions = permissions;

        next();
    } catch (error) {
        console.log("PermissionMiddleware error: " + error + "");
        next(error);
    }
}