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
function selectCharacter(name,identity,city){
    var name_p = name || 'Spiderman';
    var identity_p = identity || 'Peter Parker';
    var city_p = city || 'New York';
    console.log(name_p,identity_p,city_p)
}

superhero();
superhero('Wolverine','Logan','Alberta, Canada');

/**
 * Con ECMAScript6 podemos definir los valores por defecto que recibiran los parametros
 * en la misma definición de la función.
 */
function newSuperhero(name='Spiderman',identity='Peter Parker',city='New York'){
    console.log(name,identity,city)
}

newSuperhero();
newSuperhero('Deadpool','Wade Wilson','Canada');