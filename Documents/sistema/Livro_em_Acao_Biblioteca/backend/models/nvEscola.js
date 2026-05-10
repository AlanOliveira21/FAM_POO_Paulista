const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Nivel = sequelize.define("nivel",{
    nmNivel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    etapas: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Nivel;