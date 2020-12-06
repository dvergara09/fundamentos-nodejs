const fs = require('fs');

function leer(ruta, callback) {
  fs.readFile(ruta, (err, data) => {
    //leido
    callback(data.toString());
  });
}

function escribir(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error('error ', err);
    } else {
      console.log('bien escrito');
    }
  });
}

//leer(__dirname + '/archivo.txt', console.log);
escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
