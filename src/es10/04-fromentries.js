/**
 * Es10 agregó la característica de poder transformar un array de array a un objeto.
 * El método Object.fromEntries devuelve un objeto a partir de un array donde sus 
 * elementos son las entries en forma [propiedad, valor]
 */

const character = [
    ['name','Luigi'],
    ['start',3],
    ['coins',30],
    ['items',['Skeleton Key','Magic Lamp']],
]

// Puedo transformar en un objeto el array de character
const characterObj = Object.fromEntries(character);
console.log(characterObj);

// Estos metodos de manipulacion de array a objetos  nos ayudaran bastante cuando manejamos valores
// que trabajan con arrays de arrays y adentro tiene objetos y tenemos varias profundidades.