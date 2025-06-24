const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurando a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Servindo o arquivo pagina.html
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/register', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/register.html'));
});

app.get('/forgot', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/forgot-password.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
