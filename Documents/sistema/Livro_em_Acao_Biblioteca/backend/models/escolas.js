const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Escolas = sequelize.define("escolas",{
    nmEscola: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cdTipo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cdNivel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cdEndereco: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


module.exports = Escolas;