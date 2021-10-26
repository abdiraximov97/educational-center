const userRoute = require("./users/userRoute");

module.exports = async function (app) {
    app.use("/", userRoute);
};