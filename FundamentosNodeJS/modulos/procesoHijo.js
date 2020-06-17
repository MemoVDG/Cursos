const { exec, spawn } = require('child_process');

// Podemos ejecutar un subproceso como si ocuparamos la consola
exec('node modulos/consola.js ', (err, stdout, sterr) => {
    if(err){
        console.err(err)
        return false;
    }

    console.log(stdout)
})

// Spawn invoca un proceso nuevo de node
let proceso = spawn('dir') 

console.log(proceso.pid)

proceso.stdout.on('data', function(dato){
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit', () => {
    console.log('El proceso termino')
})