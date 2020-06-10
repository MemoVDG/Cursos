let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola')
    if (i===3){
        clearInterval(intervalo);
    }
    i++;
}, 1000)

// Ejecuta una vez arranca
setImmediate(() => {
    console.log('Hola2')
})

console.log('OK');

console.log(process);

// Imprime el directorio del archivo
console.log(__dirname);

// Imprime el nombre 
console.log(__filename);

global.myVariable = 'OK'

console.log(myVariable)