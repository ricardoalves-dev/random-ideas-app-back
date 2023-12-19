const express = require("express");
const app = express();
const ideasRouter = require('./routes/ideas.js');
require('dotenv').config(); // Este pacote carregar os valores do .env para o objeto process.env
const conectarDB = require('./config/db.js');

function configurarMiddlewares(){  
  app.use(express.json()); // Este middleware é responsável por fazer o parsing (análise) do corpo das requisições com formato JSON. Se você não utilizar este middleware, o req.body não estará disponível para requisições que enviam dados no formato JSON
  app.use(express.urlencoded({extended: false})); // Semelhante ao acima, porém para o formato application/x-www-form-urlencoded
}

function configurarRotas(){
  app.get('/ping', (req, res) => {
    res.status(HttpStatus.OK).send('pong');
  });

  app.use('/api/ideas', ideasRouter);
}

function iniciar(){ 

  try {
    configurarMiddlewares();
    configurarRotas();  
    conectarDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`));  
  } catch (error) {
    console.log(`Erro ao iniciar a API: ${error}`);
  }  
}

iniciar();