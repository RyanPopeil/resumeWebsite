const express = require('express');
const app = express();
const port = 1337;
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(express.static('html/public'));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: './client/views' })
})

app.listen(port, () => console.log('Example app listening on port 1337!'))
