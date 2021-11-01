const errorHandler = require("../helpers/errorHandler");
const userRoute = require("./users/userRoute");
const teacherRoute = require("./teachers/teacherRoute");

module.exports = async function(app) {
    try {
        app.use("/users", userRoute);
        app.use("/teachers", userRoute);
    } finally {
        app.use(errorHandler)
    }

};