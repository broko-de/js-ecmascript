/**
 * Para que el código de JavaScript sea más ordenado, legible y mantenible; ES6 introduce una forma de manejar código 
 * en archivos de manera modular. Esto involucra exportar funciones o variables de un archivo, e importarlas en otros
 * archivos donde se necesite.
 * 
 * con la sentencia export y entre {} podremos indicar que variables y/o funciones queremos exportar de este archivo
 * en caso de ser un unico elemento podremos usar la expresion export default
 */

const ITEMS = ['Mushroom','Cellular Shopper','Golden Mushroom','Boo Repellant']

const sellItemShop = () =>{    
    console.log('Estos son los items para vender');
    console.log(ITEMS);
}

export { ITEMS, sellItemShop };

// export default sellItemShop; 