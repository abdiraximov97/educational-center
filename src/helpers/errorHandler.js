module.exports = function (err, req, res, next) {
    console.log(err.stack);
    res.status(err.errorCode || 500).json({
        ok: false,
        message: err.messaqge || "Something broke!"
    });
}