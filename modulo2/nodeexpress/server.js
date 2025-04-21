// Importar Express
const express = require('express');

// Crear una instancia de Express
const app = express();

// Configurar el puerto en el que escuchará el servidor
const port = 3000;

// Ruta básica de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo! Servidor Express en funcionamiento.');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
