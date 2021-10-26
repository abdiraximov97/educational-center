module.exports = class CustomError extends Error {
    constructor(errorCode, errorMessage) {
        this.errorCode = errorCode;
        super(errorMessage);
    }
}