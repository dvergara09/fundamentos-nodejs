//console.log('Algo');

//console.info('hello');

//console.error('Error');

//console.warn('Warn');

let table = [
  {
    a: 1,
    b: 'Q',
  },
  {
    a: 2,
    b: 'Z',
  },
];

//console.log(table);
//console.table(table);
/*
console.group('conversacion');
console.log('Hola');
console.log('blablabla');
console.log('Adios');
console.groupEnd('conversacion');
console.log('ya');
*/

function funcion1() {
  console.group('funcion1');
  console.log('esto es de la funcion1');
  console.log('esto tambien');
  console.log('esto es de la funcion1');

  funcion2();
  console.log('Volvimos a la 1');
  console.groupEnd('funcion2');
}

function funcion2() {
  console.group('funcion2');
  console.log('esto es de la funcion2');
  console.log('sigue en la funcion2');
  console.groupEnd('funcion2');
}
console.log('Empezamos');
funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
