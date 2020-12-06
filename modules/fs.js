const fs = require('fs');
const { dirname } = require('path');

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

function borrar(ruta, callback) {
  fs.unlink(ruta, callback);
}

//leer(__dirname + '/archivo.txt', console.log);
//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
//borrar(__dirname + '/archivo.txt', console.log);
