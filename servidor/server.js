const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: '127.0.0.1', 
    user: 'root',
    password: '1234', 
    database: 'perseo'
  });
  
  // Conectar a la base de datos
  connection.connect(err => {
    if (err) {
      console.error('Error conectando a la base de datos:', err);
      return;
    }
    console.log('Conectado a la base de datos MySQL.');
  });

  app.get('/api/perseo', (req, res) => {
    const query = 'SELECT * from usuarios'; 
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error ejecutando la consulta:', err);
        res.status(500).send(err);
        return;
      }
      res.json(results);
    });
  });


  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
