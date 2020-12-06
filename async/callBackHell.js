function hello(name, myCallback) {
  setTimeout(function () {
    console.log(`Hello ${name}`);
    myCallback(name);
  }, 1000);
}

function talk(callbackTalk) {
  setTimeout(function () {
    console.log('Bla bla bla...');
    callbackTalk();
  }, 1000);
}

function bye(name, otherCallback) {
  setTimeout(function () {
    console.log(`Goodbye ${name}`);
    otherCallback();
  });
}

function conversation(name, veces, callback) {
  if (veces > 0) {
    talk(function () {
      conversation(name, --veces, callback);
    });
  } else {
    bye(name, callback);
  }
}

//...

/* console.log('Init process');
hello('Daniel', function (name) {
  talk(function () {
    talk(function () {
      bye(name, function () {
        console.log('Finish Process...');
      });
    });
  });
}); */

console.log('Init');
hello('Daniel', function (name) {
  conversation(name, 3, function () {
    console.log('Finish');
  });
});
