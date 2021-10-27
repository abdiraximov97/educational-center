const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    sequelize.define("users", {
        user_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        user_name: {
            type: Sequelize.STRING(64),
            allowNull: false,
        },
        user_username: {
            type: Sequelize.STRING(32),
            allowNull: false,
            unique: true,
            lowercase: true,
        },
        user_password: {
            type: Sequelize.STRING(64),
            allowNull: false,
        },
        user_gender: {
            type: Sequelize.ENUM,
            value: ['male', 'femele'],
            allowNull: false,
        }
    })
}