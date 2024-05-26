const express = require('express');
const router = express.Router();
const connection = require('../config/database');

// Ruta para obtener todos los datos
router.get('/datos', (req, res) => {
  const query = 'SELECT * FROM usuarios'; 
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

router.get('/register/:user',(req, res)=>{
    const datos = JSON.parse(decodeURIComponent(req.params.user));
    const username = datos.name;
    const email = datos.email;
    const password = datos.password;
    const selectQuery = 'SELECT * FROM usuarios WHERE correo = ?'; // Ajusta esta consulta según tu necesidad
    const insertQuery = 'INSERT INTO usuarios VALUES(?,?,?,?)';
    connection.query(selectQuery, [email], (err, results) => {
        if (err) {
          console.error('Error ejecutando la consulta:', err);
          res.status(500).json({ success: false, message: 'Error al hacer la consulta', status:500});
          return;
        }
        if (results.length === 0) {
          connection.query(insertQuery,[null,username,email,password],(err)=>{
            if(err){
                console.error('Error ejecutando la consulta:', err);
                res.status(500).send(err);
                return;
            }
            res.status(201).json({ success: true, message: 'Usuario registrado correctamente', status:201});
          })
          return;
        }
        res.status(200).json({ success: true, message: 'Usuario ya existente', status:200});
      });
});


router.get('/login/:user',(req, res)=>{
  const datos = JSON.parse(decodeURIComponent(req.params.user));
  const email = datos.email;
  const password = datos.password;
  const selectQuery = 'SELECT user_id,nombre,correo FROM usuarios WHERE correo = ? and contraseña = ?'; // Ajusta esta consulta según tu necesidad
  connection.query(selectQuery, [email,password], (err, results) => {
      if (err) {
        console.error('Error ejecutando la consulta:', err);
        res.status(500).json({ success: false, message: 'Error en la consulta', status:500});
        return;
      }      
      if (results.length === 0) {
              console.error('Usuario no encotrando:', err);
              res.status(500).json({ success: false, message: 'Usuario no encontrado', status:500});
              return;
          }      
      res.status(200).json({ success: true, message: 'Usuario correcto',data:results[0], status:200});
    });
});

router.get('/asignaturesType', (req, res) => {
  const selectQuery = 'SELECT DISTINCT(tipo_curso) FROM cursos';
  connection.query(selectQuery, (err, results) => {
      if (err) {
          console.error('Error ejecutando la consulta', err);
          res.status(500).json({ success: false, message: 'Error al hacer la consulta', status: 500 });
      }
      res.status(200).json(results)
  })
});


router.get('/asignaturesType/:type', (req, res) => {
  const type = JSON.parse(decodeURIComponent(req.params.type))
  const selectQuery = 'SELECT nombre_curso FROM cursos where tipo_curso=?';
  connection.query(selectQuery, [type],(err, results) => {
      if (err) {
          console.error('Error ejecutando la consulta', err);
          res.status(500).json({ success: false, message: 'Error al hacer la consulta', status: 500 });
      }
      if (results.length === 0) {
        console.error('Lecciones no encotrandas:', err);
        res.status(500).json({ success: false, message: 'Lecciones no encontradas', status:500});
        return;
    }     
      res.status(200).json(results)
  })
});
module.exports = router;

