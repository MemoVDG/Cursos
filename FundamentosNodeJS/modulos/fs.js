// Obtenemos el filesystem
const fs = require('fs')

function leer(ruta, callback){
    // readfile por defecto es asyncrono
    fs.readFile(ruta, (err, data) => {
        // Leido
        callback(data.toString())
    })
}


function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, (err) => {
        if(err){
            console.err('No se ha podido escribr');
        }else {
            console.log('Escrito de manera correct');
        }
    })
}

function borrar(ruta, callback){
    fs.unlink(ruta, callback)
}

leer(__dirname + '/archivo.txt', console.log)

escribir(__dirname + '/archivo.txt', 'Soy un archivo nuevo', console.log())

leer(__dirname + '/archivo.txt', console.log)

borrar(__dirname + '/archivo.text', console.log)