/**
 * En ECMAScript6 se mejoró sintacticamente la forma en declarar una clase
 * de tal manera que sea más amigable la forma en poder representables
 */
class Character {

    /**
     * Metodo de constructor de una clase. Cuando se instancia un objeto de esta clase
     * se inicializaran estos atributos. La palabra reservada this, hace referencia a la
     * clase que estamos declarando y podremos definir los atributos de la clase.
     * @param { string } name 
     * @param { number } stars 
     * @param { number } coins 
     * @param { string } items 
     */
    constructor(name, stars=0, coins=0,items=[]){
        this.name = name;
        this.stars = stars;
        this.coins = coins;
        this.items = items;
    }

    // podemos agregar metodos asociados a una clase
    greeting(){
        return `${this.name} ha sido seleccionado`;
    }

    //metodos
    addCoins(nCoins){
        this.coins+=nCoins;
    }

    addStars(nStars){
        this.stars+=nStars;
    }

    addItem(item){
        this.items.push(item);
    }

    /**
     * Definición de un método GET para un atributo de la clase
     */
    get getCoins(){
        return this.coins;
    }

    /**
     * Definición de un método SET para un atributo
     * @param {number} nCoins
     */
    set setCoins(nCoins){
        this.coins = nCoins;
    }

    
}

// instanciacion de una clase
const playerOne = new Character('Mario');
console.log(playerOne.greeting());
playerOne.setCoins = 50;
playerOne.addStars(2);
playerOne.addItem('Skeleton Key');
playerOne.addItem('Magic Lamp');

console.log(playerOne);

const playerTwo = new Character('Yoshi',2,40,['Mushroom']);
console.log(playerTwo);


