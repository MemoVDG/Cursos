async function hola(nombre){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log('Hola ' + nombre)
            resolve(nombre);
        }, 1000);
    });
}

async function adios(nombre, otroCallback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre)
            resolve();
        }, 1000)
    })

}

async function hablar(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Blablablabla');
            resolve(nombre);
        }, 1000);
    })
}

async function main(){
    let nombre = await hola('Chuchito');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}


console.log('Empezamos el processo');
main();
console.log('Termina el processo');