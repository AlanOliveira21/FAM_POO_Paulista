const Usuarios = require("../models/usuarios");

exports.criar = async (req, res) => {
    try {
        const usuarios = await Usuarios.create(req.body);
        res.json(usuarios);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

exports.listar = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll();
        res.json(usuarios);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};


exports.buscarPorId = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll({
            where: { id: req.params.id }
        });
        res.json(usuarios);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        await Usuarios.update(req.body, {
            where: { id: req.params.id }
        });
        res.send("Usuarios atualizado!");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

exports.deletar = async (req, res) => {
    try {
        await Usuarios.destroy({
            where: { id: req.params.id }
        });
        res.send("Usuario deletado!");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};