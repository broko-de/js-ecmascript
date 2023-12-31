/**
 * Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre.
 */

//Antes de ECMAScript6 se podía hacer lo siguiente
function newCharacter(uId,name,stars,coins){
    return {
        uId: uId,
        name:name,
        stars:stars,
        coins:coins
    }
}

console.log(newCharacter(1,'Toad',0,40))

//Con ECMAScript6 podemos hacer lo siguiente, creamos un objeto donde el key-value se genera 
//a partir de la variable
function newCharacter2(uId,name,stars,coins){
    return {
        name,
        stars,
        coins,
        id: uId // de igual manera podemos combinarlo con la anterior forma de hacerlo
    }
}

console.log(newCharacter2(2,'Luigi',1,20))
