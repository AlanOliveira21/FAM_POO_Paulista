const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Livros = sequelize.define("livros",{
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qt_paginas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qt_disponivel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cd_temas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Livros;