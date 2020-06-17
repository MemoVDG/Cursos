// Indica cuanto tarda el tiempo de ejecucion
console.time();
table = [
    {
        a: '1',
        b: '2'
    },
    {
        a : '1',
        b : '2'
    }
]

// Mostramos de forma ordenada los datos
console.table(table)

// Agrupamos consoles
console.group('Conversacion')
console.log('Hola')
console.group('bla')
console.log('Blabakl')
console.log('Blalalalas')
console.groupEnd('bla')
console.log('Adios')
console.groupEnd('Conversacion')


function funcion1(){
    console.group('Funcion1');
    console.log('Funcion uno')
    funcion2()
    console.log('Funcion uno tambien')
    console.groupEnd('Funcion1')
}

function funcion2(){
    console.group('Funcion2')
    console.log('Estamos en func 2')
    console.groupEnd('Funcion2')
}

console.log('Empezamos')
funcion1()

// Contamos iteraciones
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')


console.timeEnd()