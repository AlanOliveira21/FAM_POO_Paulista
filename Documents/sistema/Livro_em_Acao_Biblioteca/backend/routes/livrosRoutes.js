const express = require("express");
const router = express.Router();
const controller = require("../controllers/livroController");

router.post("/cadastro", controller.criar);
router.get("/", controller.listar);
router.get("/:titulo", controller.buscarPorTitulo);
router.patch("/atualizar/:id", controller.atualizar);
router.delete("/deletar/:id", controller.deletar);

module.exports = router;