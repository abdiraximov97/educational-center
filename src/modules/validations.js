const joi = require("joi");

module.exports = class Validations {
    static async SignUpValidation(data) {
        return await joi.object({
            name: joi.string().required().min(4).max(64),
            email: joi.string().email(),
            password: joi.string().required().min(6).max(128),
            username: joi.string().regex(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/).required(),
            gender: joi.string().required().valid(`male`, `famele`),
        }).validateAsync(data);
    };

    static async SignInValidation(data) {
        return await joi.object({
            password: joi.string().required().min(6).max(128),
            username: joi.string().regex(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/).required(),
        }).validateAsync(data);
    };
}