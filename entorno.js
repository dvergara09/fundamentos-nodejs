let nombre = process.env.NOMBRE || 'sin nombre'; //sin nombre valor por defecto
let web = process.env.WEB || 'no tengo web';

console.log('Hola ' + nombre); // NOMBRE=Daniel node entorno.js en consola
console.log('Mi web es ' + web);

console.log('otra cosa');
console.log('otra cosa 2.0');
