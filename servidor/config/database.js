const mysql = require('mysql')


const connection = mysql.createConnection({
    host: '127.0.0.1', 
    user: 'root',
    password: '1234', 
    database: 'perseo'
  });
  
  connection.connect(err => {
    if (err) {
      console.error('Error conectando a la base de datos:', err);
      return;
    }
    console.log('Conectado a la base de datos MySQL.');
  });

module.exports= connection;