process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
});

// Una vez se ejecuta el exist ya murio el proceso
process.on('exit', () => {
    console.log('El proceso acabo')
});


process.on('uncaughtException', (err, origen) => {
    console.log('Vaya se nos ha olvidado capturar un error')
    console.error(err)
})



// Para promesas que se han rechazado y nadie a capturado
//process.on('uncaughtRejection')

// Creamos un error para que vaya a uncaughtException
queNoexiste();

