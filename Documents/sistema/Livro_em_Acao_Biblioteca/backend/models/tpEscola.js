const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Tipo = sequelize.define("tipo",{
    nmTipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descTipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Tipo;