/**
 * En Es10, se agrego la posibilidad de que el parametro de catch sea opcional, por lo que
 * permite poder omitir el error si es necesario. Aunque siempre será recomendable manejar 
 * el error como un parametro ya que tiene más información del problema
 */

//Ejemplo de catch con un parametro, se llama a una función inexistente
try {
    selectCharacter()
} catch (error) {
    console.log(error);
}

//Ejemplo de catch sin parametro.
try {
    selectCharacter();
} catch {
    console.log('Se produjo un error')
}