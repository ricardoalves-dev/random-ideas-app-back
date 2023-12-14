const express = require("express");
const app = express();
const HttpStatus = require('./HttpStatus.js');
const porta = 5000;

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));

app.get('/ping', (req, res) => {
  res.status(HttpStatus.OK).send('pong');
});