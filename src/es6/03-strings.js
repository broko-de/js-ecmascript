/**
 * Template literals nos permiten crear cadenas de caracteres que puedan concatenar
 * variables de una forma más amigable. Esto mejora la legibilidad y la mantenibilidad del código.
 * Se realiza por medio de las comillas francesas ` `
 */

let character = 'Mario';
let phrase = '¡Tu princesa está en otro castillo!'
// Antigua forma de concatenar
let toadPhrase = character+', '+phrase;
console.log(toadPhrase);

// Template literal, podemos usar ${} dentro `` para poder mostrar el contenido de una variables
let toadPhrase2 = `${character}, ${phrase} 🏰`;
console.log(toadPhrase2);

// En Template literal se puede implementar salto de lineas sin tener que especificar \n
let phrase2 = `${character}, ${phrase}
    Mamma mia!
`;
console.log(phrase2);

