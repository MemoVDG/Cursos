// Reservamos espacios de memoria
let buffer = Buffer.from([1, 2, 3]);
console.log(buffer)


let buffer_2 = Buffer.from('Hola')
console.log(buffer_2);

// Buffers nos permite trabajar con el dato en su version pura
let abc = Buffer.alloc(26);
console.log(abc)

// Creamos el abecedario en binario
for (let i = 0; i<26; i++) {
    abc[i] = i + 97
}

console.log(abc)
console.log(abc.toString());