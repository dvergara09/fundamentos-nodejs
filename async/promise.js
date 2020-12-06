function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hello ${name}`);
      resolve(name);
    }, 1000);
  });
}

function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Bla bla bla...');
      resolve(name);
    }, 1000);
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Goodbye ${name}`);
      resolve();
    });
  });
}

//----
console.log('iniciando el proceso');
hello('Daniel')
  .then(talk)
  .then(talk)
  .then(talk)
  .then(talk)
  .then(bye)
  .then((name) => {
    console.log('terminado el proceso');
  });
