console.time('todo')
let suma = 0;
console.time('bucle')
for (let i =0; i < 1000000; i++ ){
    suma++;
}
console.timeEnd('bucle')

let suma_2 = 0
console.time('bucle_2')
for (let i =0; i < 2000000; i++ ){
    suma_2++;
}
console.timeEnd('bucle_2')

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Asinconoro');
            resolve()
        }, 10);
    })
}
console.time('termino_asc')
asincrona().then(() => {
    console.timeEnd('termino_asc')
})

console.timeEnd('todo')