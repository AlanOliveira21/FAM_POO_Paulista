const express = require("express");
const app = express();
const sequelize = require("./config/db");

app.use(express.json());

const livrosRoutes = require("./routes/livrosRoutes");
app.use("/livros", livrosRoutes);

sequelize.sync().then(() => {
    console.log("Banco conectado");

    app.listen(8081, () => {
        console.log("Servidor rodando na porta 8081");
    });
});