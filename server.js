const express = require("express");
const app = express();
const HttpStatus = require('./HttpStatus.js');
const porta = 5000;
const ideasRouter = require('./routes/ideas.js');

app.get('/ping', (req, res) => {
  res.status(HttpStatus.OK).send('pong');
});

// Middlewares
app.use(express.json()); // Este middleware é responsável por fazer o parsing (análise) do corpo das requisições com formato JSON. Se você não utilizar este middleware, o req.body não estará disponível para requisições que enviam dados no formato JSON
app.use(express.urlencoded({extended: false})); // Semelhante ao acima, porém para o formato application/x-www-form-urlencoded
app.use('/api/ideas', ideasRouter);

// Levantar API
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));