const express = require('express');
const router = express.Router();
const path = require('path');
const datos = require('../datos_personales.json'); // 👈 importar JSON

// Endpoint: GET /api/perfil
router.get('/perfil', (req, res) => {
  res.json(datos.perfil);
});

// Agrega más rutas si quieres
router.get('/estudios', (req, res) => {
  res.json(datos.estudios);
});

module.exports = router;