const { exec, spawn } = require('child_process');
const { log } = require('console');
/*
exec('node ./modules/console.js', (err, stdout, sterr) => {
  if (err) {
    console.err(err);
    return false;
  }

  console.log(stdout);
});
*/

let proceso = spawn('ls', ['-la']);

console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
  console.log('Kille??');
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on('exit', function () {
  console.log('terminado');
  console.log(proceso.killed);
});
