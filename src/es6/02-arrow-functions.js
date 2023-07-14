/**
 * Definicion de una funcion de forma declarativa
 * 
 */
function punchBlock(item){
    return item+", I got it! 🎁";
}

/**
 * Definicion de una Arrow function (funcion flecha) 
 * este formato es del tipo función expresiva
 */
const punchBlock = (item) => {
    console.log(item);
    return item+", I got it! 🎁";
}

/**
 * Definicion de una Arrow function con return implicito
 * se simplifica el codigo, pero no útil si tenemos multiple lineas
 * de código dentro del bloque principal de la función
 * 
 */
const punchBlock = item => item+", I got it! 🎁";

// console.log(punchBlock('Estrella'));

/*
Las funciones declarativas pueden llamarse cualquier parte del script,
mientras que las funciones expresivas solo pueden llamarse luego de haberse definidas
*/
