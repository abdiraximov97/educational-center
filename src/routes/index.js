const errorHandler = require("../helpers/errorHandler");
const userRoute = require("./users/userRoute");

module.exports = async function (app) {
    try {
        app.use("/users", userRoute);  
    } finally {
        app.use(errorHandler)
    }
    
};