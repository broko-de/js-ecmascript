/**
 * Fue añadida una nueva forma de manejar el asincronismo en JavaScript mediante funciones asíncronas.
 * La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.
 */

/**
 * Esta función retorna una promesa con el valor del dado (1-9) para el personaje en cuestion
 * tambien se le indica el tiempo que demorará en obtener el resultado del dado
 * @param { string } character 
 * @param { number } time 
 * @returns Promise
 */
const throwDice = (character,time) => {
    return new Promise((resolve)=>{
        let number = Math.floor(Math.random() * 9) + 1;
        setTimeout(() => {
            resolve(`${character} obtuvo el dado: ${number}`);
        }, time);
    })
}

/**
 * Funcion asincronica que simula la acción de tirar los dados para un personaje especifico
 * utiliza las palabras reservadas async y await para ejecutar la funcion throwDice y obtener el resultado
 * del dado y de tal manera que espera que la promesa se resuelva en el tiempo dado
 * @param {*} player 
 * @param {*} time 
 */
const simulateThrowDice = async (player,time) => { // identificamos que la función será asincrónica
    console.log(`${player} ha lanzado el dado`);
    try {
        // con await le indicamos que espere que se resuelva la promesa de la función throwDice para
        // luego continuar con la ejecución de las siguientes instrucciones. Solo funciona dentro de una función asíncrona.
        // Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.
        const result = await throwDice(player,time);
        // una vez resulta la promesa, muestra los resultados
        console.log(result);
        console.log(`Final del turno para ${player}`)
    } catch (error) {
        console.log('Ups, algo salio mal al lanzar el dado:',error)
    }
}

//Ejemplo de flujo completo de los resultados
console.log('Inicio el turno'); 
//como llama a la función asincronica y esta tarda un tiempo en resolverse, no bloqueara el programa y
//contuará con la ejecución del resto de las lineas de código
//
simulateThrowDice('Mario',2500);
simulateThrowDice('Luigi',500);
console.log('Esperando lanzamiento...');


