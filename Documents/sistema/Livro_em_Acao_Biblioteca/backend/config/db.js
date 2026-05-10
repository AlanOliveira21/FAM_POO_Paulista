const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "livros_em_acao",
    "root",
    "mysql",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = sequelize;