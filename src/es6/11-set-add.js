/**
 * Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.
 */

const ITEMS = new Set();

// Con la función  add podemos agregar elementos al SET
ITEMS.add('Reverse Mushroom');
ITEMS.add('Lucky Lamp');
ITEMS.add('Boo Bell');
ITEMS.add('Boo Bell'); // Como se agregan valores unicos, no agregará dos veces el mismo valor

console.log(ITEMS);

// Con la función delete podemos eliminar un elemento especifico
ITEMS.delete('Lucky Lamp');
console.log(ITEMS);

// Con la función has podemos comprobar si existe o no un elemento dentro del SET
console.log(ITEMS.has('Boo Bell'));

//podemos obtener la cantidad de elementos del SET
console.log(ITEMS.size);

//Con la función clear podemos borrar todos los elementos del SET
ITEMS.clear();
console.log(ITEMS);


