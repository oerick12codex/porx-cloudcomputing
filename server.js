const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

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