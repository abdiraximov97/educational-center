const expres = require("express");
const app = expres();
const morgan = require("morgan");
const routes = require("./routes");

function server(mode) {
    try {
        app.use(expres.json());
        app.use(expres.urlencoded({
            extended: true,
        }));
        
        if(mode == "dev") app.use(morgan("dev"));



    } catch (error) {
        console.log("Server Error:", error);
    } finally {
        routes(app);
    }
};

module.exports = server;