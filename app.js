const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configurar o body-parser para interpretar requisições POST
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar ao banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

// Configurar EJS como o template engine
app.set('view engine', 'ejs');

// Rota para exibir a lista de usuários
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.render('index', { users: result });
  });
});

// Rota para criar um novo usuário (via POST)
app.post('/add', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Rota para excluir um usuário
app.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
