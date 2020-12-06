const http = require('http');

http
  .createServer(function (req, res) {
    console.log('Nueva peticion');
    console.log(req.url);

    res.writeHead(201, { 'Content-Type': 'text/plain' });
    res.write('Hola estoy usando http');
    res.end();
  })
  .listen(3000);

console.log('Escuchando http en 3000');
