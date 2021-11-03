const errorHandler = require("../helpers/errorHandler");
const userRoute = require("./users/userRoute");
const teacherRoute = require("./teachers/teacherRoute");
const courseRoute = require("./course/courseRoute");

module.exports = async function(app) {
    try {
        app.use("/users", userRoute);
        app.use("/teachers", userRoute);
        app.use("/courses", courseRoute);
    } finally {
        app.use(errorHandler)
    }

};