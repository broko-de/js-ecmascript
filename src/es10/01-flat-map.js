/**
 * El aplanamiento consiste en transformar un array de arrays a una sola dimensión. 
 * Los métodos flat y flatMap permitirán realizar el aplanamiento.
 * 
 */

// El método flat devuelve un array donde los sub-arrays han sido propagados 
// hasta una profundidad especificada. Por defecto tiene el valor 1
let stars = [2,4,8,[5,7,[1,0]],30];

console.log(stars.flat());
console.log(stars.flat(2));

// El método flatMap es una combinación de los métodos map y flat.
// Permite aplanar los elementos de un array en un nivel, pasando un función 
// que mapeara cada elemento del nuevo array.
let coins = [123,22,50,30];
console.log(coins.flatMap(c=>[c*2]));