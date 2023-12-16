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

module.exports = router;