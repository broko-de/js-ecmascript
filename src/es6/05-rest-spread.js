/**
 * La desestructuración (destructuring) consiste en extraer los valores de arrays 
 * o propiedades de objetos en distintas variables.
 */
//Ejemplo con array
let pokemons = ['Jigglypuff','Onix','Meowth'];
// Destruturamos los elementos del array de pokemons en dos nuevas variables.
let [pokemon1, pokemon2] = pokemons 
console.log(pokemon1);
console.log(pokemon2);
// tambien prodiamos acceder convenicionalmente sabiendo la posición del elemento dentro del array
console.log(pokemons[2])

//Ejemplo con objetos
let pokemon3 = {nombre:'Mewtwo',tipo:'Psíquico',orden:150};
let {nombre, tipo} = pokemon3;
console.log(nombre);
console.log(tipo);
