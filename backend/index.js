import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(cors());

// Ruta para servir el JSON
app.get('/api/perfil', (req, res) => {
  const filePath = path.resolve('datos_personales.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer JSON:', err);
      return res.status(500).json({ error: 'Error al leer JSON' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

