const http = require('http');
const { read } = require('fs');

function router(req, res){
    console.log('Nueva peticion');
    console.log(req.url);


    switch(req.url){
        case '/':
            // Escribir respuesta al usuario
            res.write('Hola HTTP NodeJS');
            res.end();
            break;
        default:
            res.write('Error 404 no encontrado');
            res.end();
    }
}


http.createServer(router).listen(3000);

console.log('Escuchando http en el puerto 3000')