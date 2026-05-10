const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Endereco = sequelize.define("endereco",{
    nmRua: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nrEndereco: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nrCep: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nmBairro: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cdEstado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cdCidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Endereco;