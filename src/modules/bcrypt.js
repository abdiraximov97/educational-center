const bcrypt = require("bcrypt");

module.exports.generateHash = function(password) {
    const salt = bcrypt.genSalt(10);
    return bcrypt.hashSync(password, salt);
};

module.exports.comparePassword = function(password, hash) {
    return bcrypt.compareSync(password, hash);
}