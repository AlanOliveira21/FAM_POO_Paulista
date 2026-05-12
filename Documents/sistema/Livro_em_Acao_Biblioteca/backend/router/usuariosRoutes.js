const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuariosController");

router.post("/cadastro", controller.criar);
router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.patch("/atualizar/:id", controller.atualizar);
router.delete("/deletar/:id", controller.deletar);

module.exports = router;