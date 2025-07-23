const express = require('express');
const app = express();

app.use(express.static('public')); // Sirve archivos estáticos desde ./public

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
