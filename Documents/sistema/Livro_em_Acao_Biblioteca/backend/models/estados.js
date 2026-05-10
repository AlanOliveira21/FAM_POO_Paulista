const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Estado = sequelize.define("estado",{
    nmEstado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sigla: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Estado;