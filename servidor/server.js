const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const usuarioRoutes = require('./routes/usuarioRoutes');

app.use('/api', usuarioRoutes);


  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
