module.exports = async(sequelize, Sequelize) => {
    return await sequelize.define("sessions", {
        session_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        session_useragent: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
    });
};