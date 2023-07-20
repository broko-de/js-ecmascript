/**
 * El método finally para promesas consiste en ejecutar código después que una
 * promesa haya sido ejecutada como resuelta o rechazada..
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

// Independientemente de que se resuelva o se rechace la promesa el metodo
// finally se ejecutará
getStarsFromCoins(110)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=>console.log('Finalizado el proceso de obtención de 🌟'));

getStarsFromCoins(-23)
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .finally(()=>console.log('Finalizado el proceso de obtención de 🌟'));
