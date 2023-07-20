/**
 * Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos 
 * y evitar errores de sintaxis.
 */

let players = ['Mario','Donkey Kong', 'Waluigi', , , 'Yoshi'];
console.log(players);

// En este caso se reserva 6 elementos en el array de player
console.log(players.length)