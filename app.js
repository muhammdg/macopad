const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const staticpath = path.join(__dirname, '/');

var antares = require('antares-http');

app.use(express.static(staticpath));

app.get('/', (req, res) => {
  res.sendFile(staticpath + '/index.html');
});

app.get('/dashboard', function (req, res) {
  res.sendFile(staticpath + '/dashboard.html');
});

app.get('/api', function (req, res) {
  antares.setAccessKey('6388160f97f65e86:814c491f9d66078b');
  antares.get('MACOPAD', 'MACOPAD01').then(function (response) {
    const data = response.content;
    res.json(data);
  });
});

app.listen(port);
