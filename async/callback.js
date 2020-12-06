function hello(name, myCallback) {
  setTimeout(function () {
    console.log(`Hello ${name}`);
    myCallback(name);
  }, 1000);
}

function bye(name, otherCallback) {
  setTimeout(function () {
    console.log(`Goodbye ${name}`);
    otherCallback();
  });
}

console.log('Init process');
hello('Daniel', function (name) {
  bye(name, function () {
    console.log('Finish Process...');
  });
});
