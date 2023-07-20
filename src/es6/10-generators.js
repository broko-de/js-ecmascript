/**
 * Los generadores son funciones especiales que pueden pausar su ejecución, 
 * luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores. Son una herramienta
 * poderosa que nos permite definir un algoritmo iterativo al escribir una sola función que puede mantener su
 * propio estado.
 * 
 */

/**
 * Para identificar una función generadora, se utiliza la palabra reservada function*
 * 
 * la palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, 
 * recordando el valor anterior.
 * @param {*} items 
 */
function* viewItems(items){
    //Este bucle for recorre iterables como array, Map y Set. 
    //por lo que se recorre el array de items en la variable item
    for (let item of items) {
        yield item;
    }
}

const ITEMS = ['Mushroom','Cellular Shopper','Golden Mushroom','Boo Repellant']


// definimos una constante a partir de funcion generadora y le pasamos el array de ITEMS
const item = viewItems(ITEMS);
//El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; 
console.log(item.next().value);
//Cada vez que se ejecuta next, recuerda el estado donde se habia quedado en la iteración 
//y muestra el siguiente valor
console.log(item.next().value);
console.log(item.next().value);

