async function hello(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Hello ${name}`);
      resolve(name);
    }, 1000);
  });
}

async function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Bla bla bla...');
      resolve(name);
    }, 1000);
  });
}

async function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Goodbye ${name}`);
      resolve();
    });
  });
}

async function main() {
  let nombre = await hello('Daniel');
  await talk();
  await talk();
  await talk();
  await bye(nombre);
  console.log('Finish process');
}

console.log('Init process');

main();
