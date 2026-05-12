const Escolas = require("../models/escolas");

exports.criar = async (req, res) => {
    try {
        const escolas = await Escolas.create(req.body);
        res.json(escolas);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

exports.listar = async (req, res) => {
    try {
        const escolas = await Escolas.findAll();
        res.json(escolas);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};


exports.buscarPorId = async (req, res) => {
    try {
        const escolas = await Escolas.findAll({
            where: { id: req.params.id }
        });
        res.json(escolas);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        await Escolas.update(req.body, {
            where: { id: req.params.id }
        });
        res.send("Escola atualizado!");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

exports.deletar = async (req, res) => {
    try {
        await Escolas.destroy({
            where: { id: req.params.id }
        });
        res.send("Escola deletada!");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};