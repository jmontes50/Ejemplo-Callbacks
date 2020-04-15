let animales = ["Perro", "Gato", "Cerdo"];

let buscarAMiGato = (animal, callback) => {
  for (let i = 0; i < animales.length; i++) {
    if (animales[i] == animal) {
      callback(i, false);
      return;
    }
  }
  callback(null, true);
};

buscarAMiGato("Michi", (posicion, error) => {
  if (error === false) {
    console.log("Se encontro al gato " + posicion);
  } else {
    console.log("Bye michi");
  }
});
