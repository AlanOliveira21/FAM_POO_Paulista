const Livros = require("../models/livros");

exports.criar = async (req, res) => {
    try {
        const livro = await Livros.create(req.body);
        res.json(livro);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

exports.listar = async (req, res) => {
    try {
        const livros = await Livros.findAll();
        res.json(livros);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};


exports.buscarPorTitulo = async (req, res) => {
    try {
        const livros = await Livros.findAll({
            where: { titulo: req.params.titulo }
        });
        res.json(livros);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        await Livros.update(req.body, {
            where: { id: req.params.id }
        });
        res.send("Livro atualizado!");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

exports.deletar = async (req, res) => {
    try {
        await Livros.destroy({
            where: { id: req.params.id }
        });
        res.send("Livro deletado!");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};