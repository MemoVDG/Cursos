function hola(nombre, mycallback){
    setTimeout(() => {
        console.log('Hola ' + nombre)
        mycallback();
    }, 1000)
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log('Adios ' + nombre)
    }, 1000)
}


console.log('Iniciando processo');
// Agregamos un callback como funcion
hola('Chuchito', () => {
    adios('Chuchito', () => {
        console.log('Terminando proceso');
    });
});