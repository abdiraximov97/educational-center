module.exports = async function init(db) {

    const count = await db.users.count();

    if (count === 0) {
        const admin = await db.users.create({
            user_name: "shaxboz abdiraximov",
            user_username: "shaxboz",
            user_password: "shaxboz",
            user_gender: "male",
        });
    };

    const admin_permission = await db.permissions.create({
        permission_name: "admin",
    });

    const set_permission = await db.user_permissions.create({
        user_id: admin.dataValues.user_id,
        permission_id: admin_permission.dataValues.permission_id,
    });
}