//Con var podemos tener  global scope, function scope y block scope
var character = 'Mario';
//reasignacion de una variable global
character = 'Luigi';
console.log(character)

/**
 * Con let podemos tener function scope y block scope
 * se puede realizar re-asignación del contenido, pero no así re-declaracion
 */
let enemy = 'Bowser';
enemy = 'Wario' // re-asignacion
console.log(enemy) // 'Fuego'

let enemy = 'Big Bob-omb' // ERROR


/**
 * Con Const podemos tener function scope y block scope
 * NO se puede realizar re-asignación ni re-declaracion
 */
const ITEM = 'Estrella';
ITEM = 'Champiñon'; // ERROR
console.log(ITEM);

/**
 * Ejemplo Scope de variables
 * function scope: las variables pueden ser accedidas dentro del ambito de la funcion
 * block scope: solo pueden ser accedidas dentro del ambito del bloque donde fueron declaradas 
 */
function getCharacter(){
    if(true){
        var character1 = 'Mario'; // function scope
        let character2 = 'Luigi'; // block scope
        const character3 = 'Princesa Peach' // block scope
    }
    console.log(character1);
    console.log(character2); // ERROR, character2 not defined
    console.log(character3); // ERROR, character3 not defined
}

getCharacter();
console.log(character1) //ERROR, character1 not defined