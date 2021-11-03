const joi = require("joi");

module.exports = class Validations {
    static async SignUpValidation(data, Error) {
        return await joi
            .object({
                name: joi
                    .string()
                    .required()
                    .min(4)
                    .max(64)
                    .error(new Error(`Name is invalid`)),
                email: joi.string().email().error(new Error(`Email is invalid`)),
                password: joi
                    .string()
                    .required()
                    .min(6)
                    .max(128)
                    .error(new Error(`Password is invalid`)),
                username: joi
                    .string()
                    .regex(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
                    .required()
                    .error(new Error(`Username is invalid`)),
                gender: joi
                    .string()
                    .required()
                    .valid(`male`, `famele`)
                    .error(new Error(`There is no such selection`)),
            })
            .validateAsync(data);
    }

    static async SignInValidation(data, customError) {
        return await joi
            .object({
                username: joi
                    .string()
                    .regex(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
                    .required()
                    .error(new customError(`Username is invalid`)),
                password: joi
                    .string()
                    .required()
                    .min(5)
                    .max(128)
                    .error(new customError(400, `Password is invalid`)),
            })
            .validateAsync(data);
    };

    static async AddTeacherValidation(data, customError) {
        return await joi
            .object({
                user_id: joi
                    .uuid()
                    .required()
                    .error(new customError(`User ID is invalid`)),
                phone: joi
                    .string()
                    .required()
                    .regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/)
                    .error(new customError(`Phone is invalid`)),
            })
            .validateAsync(data);
    }

    static async CourseCreateValidation(data, customError) {
        return await joi
            .object({
                name: joi
                    .string()
                    .required()
                    .min(4)
                    .max(64)
                    .error(new customError(400, `Course name is invalid`)),
                description: joi
                    .string()
                    .required()
                    .min(64)
                    .error(new customError(400, `Course description is invalid`)),
                price: joi
                    .number()
                    .min(0)
                    .required()
                    .error(new customError(400, `Course price is invalid`)),

            })
            .validateAsync(data);
    };
};