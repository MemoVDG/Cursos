const fs = require('fs')
const stream = require('stream')
const util = require('util')

// Stream de lectura
let data = '';
let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('UTF8');
readableStream.on('data', (chunk) => {
    data += chunk;
})

readableStream.on('end', () => {
    console.log('Termino de cargar')
    console.log(data)
})


// Stream de escritura
process.stdout.write('Hola');
process.stdout.write('que');
process.stdout.write('tal');

// Leer del fichero pasar a minusculas y escribir de nuevo
const Transform = stream.Transform;

function Mayusc() {
    Transform.call(this);
}

util.inherits(Mayusc, Transform);

Mayusc.prototype._transform = (chunk, codif, cb) => {
    chunkMayusc = chunk.toString().toUpperCase();
    this.push(chunkMayusc);
    cb();
}

let m =  new Mayusc()
readableStream.pipe(m)
    .pipe(process.stdout);