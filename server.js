const express = require("express");
const app = express();
const HttpStatus = require('./HttpStatus.js');
const porta = 5000;
const ideasRouter = require('./routes/ideas.js');

app.get('/ping', (req, res) => {
  res.status(HttpStatus.OK).send('pong');
});

app.use('/api/ideas', ideasRouter);

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));