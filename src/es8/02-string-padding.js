/**
 * El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, 
 * repetido hasta que complete la longitud máxima.
 * Tener en cuenta que la longitud máxima a rellenar incluye la cantidad de caracteres del string inicial
 */
let character = "Mario";

//En este caso rellenará con 5 * al inicio, porque el string 'Mario' tienen 5 caracteres
console.log(character.padStart(10,`⭐` )); // *****Mario

// En este caso solo mostrará el string 'Mario' porque contiene 5 caracteres
console.log(character.padStart(5,'⭐')); // Mario

// Teniendo en cuenta la longitud del string inicial podríamos sumarle la cantidad de caracteres que deseamo
// agregar al principio
console.log(character.padStart(character.length+4,'🌟')); // ++++Mario


// De igual manera que podemos completar con caracteres al inicio podemos hacerlo al final con la funcion
// padEnd
console.log(character.padEnd(10,'⭐')); // Mario*****

console.log(character.padEnd(5,'⭐')); // Mario

console.log(character.padEnd(character.length+4,'🌟')); // Mario++++ 
