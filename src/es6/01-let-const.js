//Con var podemos tener  global scope, function scope y block scope
var pokemon = 'charmander';
//reasignacion de una variable global
pokemon = 'pikachu';
console.log(pokemon)

/**
 * Con let podemos tener function scope y block scope
 */
let tipoPokemon = 'Electrico';
tipoPokemon = 'Fuego'
console.log(tipoPokemon)


const entrenador = 'Ash';
// entrenador = 'Brock'
// console.log(entrenador)

function algo(){
    console.log(entrenador);
}

algo();