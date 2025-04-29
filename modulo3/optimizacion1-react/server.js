const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 4000;

// Configuración básica
app.use(cors());
app.use(express.json());

// Conexión a SQLite
const db = new sqlite3.Database('./db.sqlite', (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos', err);
  } else {
    console.log('Conectado a SQLite');
  }
});

// Crear tabla si no existe
db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        apellido TEXT,
        email TEXT UNIQUE,
        password TEXT
      )
    `);
  });

  // Ruta para obtener todos los usuarios registrados
app.get('/api/users', (req, res) => {
    db.all('SELECT id, nombre, apellido, email FROM users', (err, rows) => {
      if (err) {
        console.error('Error en la consulta', err);
        return res.status(500).json({ message: 'Error al obtener usuarios' });
      }
      res.json({ success: true, users: rows });
    });
  });
  

// Ruta para login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      console.error('Error en la consulta', err);
      res.status(500).json({ message: 'Error en servidor' });
    } else if (row) {
      res.json({ success: true, user: { id: row.id, nombre: row.nombre, apellido: row.apellido, email: row.email } });
    } else {
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
  });
});

// Ruta para registrar usuario
app.post('/api/register', (req, res) => {
    const { nombre, apellido, email, password } = req.body;
  
    if (!nombre || !apellido || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
  
    db.run('INSERT INTO users (nombre, apellido, email, password) VALUES (?, ?, ?, ?)',
      [nombre, apellido, email, password],
      function(err) {
        if (err) {
          if (err.code === 'SQLITE_CONSTRAINT') {
            return res.status(409).json({ message: 'El correo ya está registrado' });
          }
          console.error('Error al registrar', err);
          return res.status(500).json({ message: 'Error al registrar usuario' });
        }
        res.json({ success: true, userId: this.lastID });
      });
  });

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
