const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Pedidos = sequelize.define("pedidos",{
    cdLivro: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cdUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qtPedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dtPedido: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dtDevolucao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Pedidos;