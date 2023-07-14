/**
 * La desestructuración (destructuring) consiste en extraer los valores de arrays 
 * o propiedades de objetos en distintas variables.
 */
//Ejemplo con array
let characters = ['Toad','Yoshi','Peach'];
// Destruturamos los elementos del array de pokemons en dos nuevas variables.
let [character1, character2] = characters 
console.log(character1);
console.log(character2);
// tambien prodiamos acceder convenicionalmente sabiendo la posición del elemento dentro del array
console.log(characters[2])

//Ejemplo con objetos
let character3 = {name:'Mario',starts:4,coins:150};
// Destructuramos los elementos de un objeto en dos variables con el mismo no nombre de las llaves
// del objeto.
let {name, coins} = character3;
console.log(name);
console.log(coins);


/**
 * spread operator, el operador de propagación consiste en propagar la información de un elemento
 * a otros, por ejemplo lo podemos utilizar en array u objetos. El operador es '...'
 */

let character4 = {name:'Yoshi', coins:40}
let starts = 2

// Creamos un objeto data con los elementos que contiene character4 más otro valores
let data = { id:1, ...character4,starts} 
console.log(data)

// En el siguiente ejemplo se creara un array que contenga como elementos cada caracter
// de la palabra Mario
const arrayMario = [..."Mario"]
console.log(arrayMario)

/**
 * Parametros rest, lo que nos permite en este caso es empaquetar los parametros que reciba una 
 * funcion en un array u objeto
 */

function addCoins(coin,...values){
    console.log(values);
    for (let i = 0; i < values.length; i++) {
        coin=coin+values[i];
    }
    return coin;
}

// Cuando llamamos a la función podemos enviarle una X cantidad de parametros
// la función intermamente, luego del primer parámetro los agruparara en una sola variable
let result = addCoins(10,20,40,70);
console.log(`Cantidad de monedas: ${result} 💰`)

let result2 = addCoins(5,2,4,7,15);
console.log(`Cantidad de monedas: ${result2} 💰`)
