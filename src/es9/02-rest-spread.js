/**
 * Si bien los operadores de spread y rest (...) ya habian sido incorporados en ES6 para array, 
 * en ES9 se extendió esta funcionalidad para objetos/
 */

const character1 = {
    name: 'Mario',
    stars: 2,
    coins: 100,
    items: []
}

// En este caso extraeremos en dos variables el contenido del objeto character1
// en la variable name se guardará el valor del atributo name del objeto
// en values se guardaran en un nuevo objeto, las llaves-valores del resto del objeto, 
let { name, ...values } = character1;

console.log(name);
console.log(values);
