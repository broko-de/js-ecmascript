/**
 * 
 * Los parámetros por defecto (default params) consisten en establecer un valor por defecto
 * a los parámetros de una función, para asegurar que el código se ejecute correctamente en 
 * el caso de que no se establezcan los argumentos correspondientes en la invocación de la función.
 *  
 */

/**
 * Antes de ES6, se debía establecer una variable y utilizar el operador OR (||)
 *  con el valor por defecto necesario.
 */
function selectCharacter(name,lives,world){
    var name_p = name || 'Mario';
    var lives_p = lives || 2;
    var world_p = world || '1-1';
    console.log(name_p,lives_p,world_p)
}

selectCharacter();
selectCharacter('Luigi',3,'8-4');

/**
 * Con ECMAScript6 podemos definir los valores por defecto que recibiran los parametros
 * en la misma definición de la función.
 */
function newSelectCharacter(name='Mario',lives=2,world='1-1'){
    console.log(name,lives,world)
}

newSelectCharacter();
newSelectCharacter('Luigi',1,'5-1');