const mongoose = require('mongoose');

async function conectarDB(databaseURI){
  const conn = await mongoose.connect(databaseURI);
  console.log(`DB Conectado: ${conn.connection.host}`);
}

module.exports = conectarDB;