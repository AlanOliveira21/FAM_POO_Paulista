const express = require("express");
const app = express();
const sequelize = require("./config/db");

app.use(express.json());

const livrosRoutes = require("./router/livrosRoutes");
app.use("/livros", livrosRoutes);

const usuaeiosRoutes = require("./router/usuariosRoutes");
app.use("/usuarios", usuaeiosRoutes);

const escolasRoutes = require("./router/escolasRoutes");
app.use("/escolas", escolasRoutes);

sequelize.sync().then(() => {
    console.log("Banco conectado");

    app.listen(8081, () => {
        console.log("Servidor rodando na porta 8081");
    });
});