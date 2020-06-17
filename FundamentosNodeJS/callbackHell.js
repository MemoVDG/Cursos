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

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('Blablablabla');
        callbackHablar();
    }, 1000);
}


console.log('Iniciando processo');
// Agregamos un callback como funcion
// --------- Callback hell -----------
/*hola('Chuchito', () => {
    hablar(()=> {
        hablar(() => {
            adios('Chuchito', () => {
                console.log('Terminando proceso');
            });
        }) 
    })
}); */

// Correccion de callback hell

console.log('Inciando Processo sin callback hell')

function conversacion(nombre, veces, callback){
    if (veces > 0){
        hablar(() => {
            console.log(nombre)
            conversacion(nombre, --veces, callback);
        });
    }else {
        adios(nombre, callback);
    }
}


hola('Chuchito', (nombre) => {
    conversacion(nombre, 3, () => {
        console.log('Proceso terminado');
    })
})

