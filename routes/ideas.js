const express = require('express');
const router = express.Router();
const Response = require('../Response.js');
const data = require('../data.js');
const HttpStatus = require('../HttpStatus.js');

router.get('/', (req, res) => {
  const response = new Response();  
  response.data = data;
  return res.status(HttpStatus.OK).json(response.toJson());
});

router.get('/:id', (req, res) => {
  const response = new Response();
  const dado = data.filter(elemento => elemento.id === parseInt(req.params.id));

  if(dado.length > 0){
    response.data = dado[0];
    console.log(response.data);
    return res.status(HttpStatus.OK).json(response.toJson());
  }
  else{
    return res.status(HttpStatus.NOT_FOUND).json(response.toJson());  
  }
});

router.post('/', (req, res) => {
  console.log(req.body.autor);
  const idea = {
    id: data[data.length - 1].id + 1,
    autor: req.body.autor,
    descricao: req.body.descricao,
  };

  data.push(idea);
  const response = new Response();
  response.data = idea;
  return res.status(HttpStatus.OK).json(response.toJson());
});

module.exports = router;