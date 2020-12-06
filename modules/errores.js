function otrafuncion() {
  return serompe();
}

function serompe() {
  return 3 + z;
}

function seRompeAsync(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('error en funcion asincrona');
      cb(error);
    }
  });
}

try {
  seRompeAsync(function (error) {
    console.error(error.message);
  });
} catch (error) {
  console.error('Error');
  console.error(error.message);
}

console.log('Soy el final');
