module.exports = function (err, req, res, next) {
    console.log(err.stack);
    res.status(err.code || 500).send(err.messaqge || "Something broke!");
}