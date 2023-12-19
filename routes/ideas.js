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
    return res.status(HttpStatus.OK).json(response.toJson());
  }
  else{
    return res.status(HttpStatus.NOT_FOUND).json(response.toJson());  
  }
});

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
  const response = new Response();
  for (let i = 0; i < data.length; i++) {
    if(data[i].id === parseInt(req.params.id)){
      data.splice(i, 1);
      return res.status(HttpStatus.OK).json(response.toJson());
    }    
  }
  
  return res.status(HttpStatus.NOT_FOUND).json(response.toJson());  
});

router.put('/:id', (req, res) => {
  const response = new Response();
  const index = data.findIndex(d => d.id === parseInt(req.params.id));

  if(index >= 0){
    data[index].autor = req.body.autor;
    data[index].descricao = req.body.descricao;
    response.data = data[index];
    return res.status(HttpStatus.OK).json(response.toJson());
  }

  return res.status(HttpStatus.NOT_FOUND).json(response.toJson());
});

module.exports = router;