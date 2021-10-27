module.exports = async function init(db) {

    const count = await db.users.count();

    if (count === 0) {
        const admin = await db.users.create({
            user_name: "shaxboz abdiraximov",
            user_username: "shaxboz",
            user_password: "shaxboz",
            user_gender: "male",
        });
    }

}