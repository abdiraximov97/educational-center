const errorHandler = require("../helpers/errorHandler");
const userRoute = require("./users/userRoute");
const teacherRoute = require("./teachers/teacherRoute");
const courseRoute = require("./course/courseRoute");
const applicationRoute = require("./applicants/applicantRoute");

module.exports = async function(app) {
    try {
        app.use("/users", userRoute);
        app.use("/teachers", teacherRoute);
        app.use("/courses", courseRoute);
        app.use("/applicants", applicationRoute);
    } finally {
        app.use(errorHandler)
    }

};