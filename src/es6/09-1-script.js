/**
 * Para poder hacer uso de un modulo, en este caso se necesita especificar en el package.json que nuestro código 
 * permitirá modulos (linea 16).
 * 
 * Una vez realizado esto, podremos hacer la importación de funciones o variables desde otro archivo por medio de 
 * la sentencia import. Se puede indicar entre {} las funciones o variables que se necesitan importar, en caso de 
 * ser un una sola, no son necesarias las {}.
 * Si se necesita importar todas variables y/o funciones desde otro archivo podemos usar *
 */
import { ITEMS, sellItemShop } from "./09-0-module.js";

// import  sellItemShop  from "./09-0-module.js";

// import * as myModule from "./09-0-module.js";

console.log(ITEMS)
sellItemShop();

// myModule.sellItemShop()