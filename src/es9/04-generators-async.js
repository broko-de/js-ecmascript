/**
 * Los generados asíncronos son semejantes a los generadores que se incorporaron 
 * en ES6, pero con la potencialidad de poder usar async y await, por lo que 
 * ahora se trabajaran con promesas en los iteradores
 * 
 */

async function* viewItems(){
    // por lo que se hace await de una promesa
    yield await Promise.resolve('Boo Repellant');
    yield await Promise.resolve('Mushroom');
    yield await Promise.resolve('Cellular Shopper');
    yield await Promise.resolve('Golden Mushroom');
}

const item = viewItems();
// ahora con la palabra reservada next podremos pedir cada una de las promesas que
// nos genera el generator. Por lo tanto al obtener una promesa, podremos hacer uso
// then, para obtener el resultado de la promesa. Se realiza response.value 
// porque el generador retorna un objeto que contiene una propiedad value
item.next().then(response => console.log(response)); // objeto
item.next().then(response => console.log(response.value));
item.next().then(response => console.log(response.value));

// Colocamos esta sentencia para poder observar que las llamadas anteriores 
// no son bloqueantes, ejecutaran lo que continue del programa hasta que
// se resuelvan las promesas.
console.log('---Listando los elementos del shop---');

