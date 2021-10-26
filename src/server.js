const expres = require("express");
const app = expres();
const morgan = require("morgan");
const routes = require("./routes");
const postgres = require("./modules/postgres");
const databaseMiddleware = require("./middlewares/databaseMiddleware");

async function server(mode) {
    try {
        app.listen(process.env.PORT || 80, () => {
            console.log(`server ${process.env.PORT || 80} - portda yondi`);
        });

        const db = await postgres();

        databaseMiddleware(db, app);

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