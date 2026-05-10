const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cargo = sequelize.define("cargo",{
    nmCargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descCargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cdEscola: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Cargo;