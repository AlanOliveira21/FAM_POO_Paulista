const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cidade = sequelize.define("cidade",{
    nmCidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sigla: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Cidade;