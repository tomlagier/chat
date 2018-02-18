var express = require('express');
var expressWs = require('express-ws');

var app = express();
expressWs(app);

app.ws('/ws', (ws, req) => {
  ws.on('message', message => {
    console.log(`got message ${message}`);
    ws.send(`Echo from server: ${message}`);
  });
});

app.use(express.static('public'));
app.listen(9123, function() {
  console.log('Dummy app listening on 9123');
});
