/**
 * Con la característica de Optional chaining JavaScript te retornará undefined
 * cuando intentas acceder a propiedades de un objeto que no existen. De esta manera, nos 
 * permite validar que este presente un atributo en un objeto y que no afecte el funcionamiento
 * de nuestro aplicativo.
 */

const characters = {
    playerOne : {
        name:'Mario',
        coins:50
    },
    playerTwo : {
        name:'Peach',
        coins:150
    }
}

console.log(characters.playerOne.name);