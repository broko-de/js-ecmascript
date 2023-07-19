/**
 * Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto
 * que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye 
 * una razón por la cual no ha sido resuelta la solicitud.
 */
const getStarsFromCoins = (coins) => {
    return new Promise((resolve,reject) => {        
        if(coins>0){
            let stars = Math.floor(parseInt(coins/40));
            resolve(`Te corresponden ${stars} ⭐`);
        }else{
            reject('Error, no te corresponden Estrellas')
        }
    })
}

getStarsFromCoins(110)
    .then(response => console.log(response))
    .catch(error => console.log(error));
    
getStarsFromCoins(-23)
    .then(response => console.log(response))
    .catch(error => console.error(error));
