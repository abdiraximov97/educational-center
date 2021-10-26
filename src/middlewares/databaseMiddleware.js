module.exports = async function (db, app) {
    app.use((req, res, next) => {
        req.db = await db;
        next(); 
    }) 
}