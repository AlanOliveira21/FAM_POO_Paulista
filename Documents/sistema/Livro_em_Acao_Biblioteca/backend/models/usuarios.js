const { DataTypes } = rquire("sequelize");
const sequelize = require("../config/db");

const Usuarios = sequelize.define("usuarios",{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cdCargo: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


module.exports = Usuarios;