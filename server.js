//EXPORTING
//EXPRESS
const express = require('express');
//BODY PARSER
const bodyParser = require('body-parser')
//PATH
const path = require('path');
//APP
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

//APP GET
app.get('/ping', function (req, res) {
 return res.send('pong');
});
//APP GET
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//APP LISTEN
app.listen(process.env.PORT || 8080);