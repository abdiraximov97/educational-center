const CustomError = require("../helpers/customError");

module.exports = function customErrorMiddleware(req, res, next) {
	res.error = CustomError;
	next();
};