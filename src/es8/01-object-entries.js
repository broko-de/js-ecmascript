/**
 * Los métodos de transformación de objetos a arrays sirven para obtener 
 * la información de las propiedades, sus valores o ambas.
 */
// a partir de la definición de un objeto, vamos a poder obtener en formato de array los distintos elementos 
// que lo componen
const playerOne = {
    name: 'Donkey Kong',
    stars:0,
    coins:100,
    items:['Magic Lamp']
}

// Obtenemos un array con las propiedades del objeto
console.log(Object.keys(playerOne));

// Obtenemos un array con los valores de cada propiedad del objeto
console.log(Object.values(playerOne));

// Obtenemos un array con las entries en forma [propiedad valor] del objeto
console.log(Object.entries(playerOne));

