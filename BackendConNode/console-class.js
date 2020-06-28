const fs = require('fs');
const util = require('util');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

// Creamos una nueva consola y le decmios en donde va a escribir
const consoleFile = new console.Console(out, err);

setInterval(() => {
	consoleFile.log(new Date());
	consoleFile.error(new Error('UPS'));
}, 5000);

// %s -> string
// %d -> numero
// %j -> json

console.log('Un %s y un %s', 'Perrito', 'Gatito');
console.info('Hello world');
console.warn('Hello error');

// Hace comparacion y manda error en caso de haber
//console.assert(42 === '42');
// Indica la linea en donde pasa el error
//console.trace('Hello');

// Mandar un tipo breakpoint, se debe pasar al correlos
// NODE_DEBUG=foo console-classjs
const debuglog = util.debuglog('foo');
debuglog('Hello from fooo');

// Indicamos al usuario que la funcion estar obsoleta
const helloPluto = util.deprecate(() => {
	console.log('Hello');
}, 'pluto is deprecated');

helloPluto();
