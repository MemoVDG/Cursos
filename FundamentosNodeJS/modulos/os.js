const os = require('os')

// Obtener la arquitectura del sistema
console.log(os.arch());

// Obtener la plataforma
console.log(os.platform())

// Obtener el numero de nucleos del sistema
// se puede levantar un node por nucleo
console.log(os.cpus())
console.log(os.cpus().length)

// Da los errores y processo del sistema
console.log(os.constants)

const SIZE = 1024;

function kb(bytes){
    return bytes / SIZE
}

function mb(bytes){
    return kb(bytes / SIZE)
}

function gb(bytes){
    return mb(bytes / SIZE)
}

// Regresa la memoria RAM libre
console.log(os.freemem())
console.log(kb(os.freemem()))
console.log(mb(os.freemem()))
console.log(gb(os.freemem()))

// Total de memoria RAM
console.log(os.totalmem())

// Obtener el root del usuario
console.log(os.homedir())
// Carpeta de archivos temporales del sistema
console.log(os.tmpdir())

// En servidores
console.log(os.hostname())

// Obtenmos interfaces de red
console.log(os.networkInterfaces())