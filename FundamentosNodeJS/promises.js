function hola(nombre){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log('Hola ' + nombre)
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre, otroCallback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre)
            resolve();
        }, 1000)
    })

}

function hablar(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Blablablabla');
            resolve(nombre);
        }, 1000);
    })
}

// Las promesas se pueden ir anidando
console.log('Iniciando el proceso...')
// Si una promesa falla todas fallan para no propagar el error
hola('Chuhito')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proces')
    })
    .catch((error) => {
        console.error('Ha habido un error');
        console.error(error)
    })