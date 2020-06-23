const { callbackify } = require("util")

function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 +z
            callback(null, a)
        } catch(e){
            callback(e)
        }
    }, 1000)
}

try {
asincrona((err, datao) => {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        throw err
        //return false;
    }

    console.log(`Todo bien mi data es ${dato}`)
})
} catch(e){
    console.error(`Error capturado ${e}`)
}