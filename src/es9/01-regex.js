/**
 * Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de cadenas 
 * de caracteres increíblemente potente y están presentes en todos los lenguajes de programación.
 * 
 * En JavaScript se crea este patrón entre barras inclinadas (/patrón/) 
 * y se utiliza métodos para hacer coincidir la búsqueda.
 */

//se genera una expresión regular para validar los mundos de Mario Bros 
const regexWorld = /([1-7]{1})-([1-4]{1})/

// realizamos la comprobación el string a evaluar cumple con la expresion regular
const match = regexWorld.exec('7-2');

// Nos permite mostrar por consola un array en formato de tabla
console.table(match);