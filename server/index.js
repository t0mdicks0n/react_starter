var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/', function (req, res) {
  // TODO
});

app.get('/', function (req, res) {
  // TODO
});

var port = 1337;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

