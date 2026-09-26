const express = require("express");
const { Pool } = require("pg");

const app = express();




const PORT = process.env.PORT || 3000;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.get("/", (req, res) => {
    res.send(`
        <h1>Projeto PaaS</h1>
        <p>Aplicação Node.js executando na nuvem!</p>
        <p>Disciplina: Cloud Computing</p>
    `);
});

app.get("/sobre", (req, res) => {
    res.json({
        projeto: "Estudo Prático sobre PaaS",
        plataforma: "Render",
        tecnologia: "Node.js + Express"
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        status: "online",
        mensagem: "API funcionando corretamente"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/database", async (req, res) => {
    try {
        const resultado = await pool.query("SELECT NOW()");

        res.json({
            status: "Banco PostgreSQL conectado!",
            horarioBanco: resultado.rows[0].now
        });
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            status: "Erro ao conectar ao PostgreSQL"
        });
    }
});