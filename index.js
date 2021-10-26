const server = require("./src/server");
require("dotenv");




server(process.env.MODE);