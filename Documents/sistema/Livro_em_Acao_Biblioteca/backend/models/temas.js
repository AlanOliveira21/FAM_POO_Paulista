const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Temas = sequelize.define("temas",{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    materia: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Temas;