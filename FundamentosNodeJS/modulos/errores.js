function otrFuncion(){
    serompe();
}

function serompe(){
    return 3 + z;
}

function serompeAsincrona(){
    setTimeout(() => {
        try {
            return 3 +z;
        } catch(err){

        }
    })
}

try{
    //otrFuncion()
    serompeAsincrona()
} catch(err){
    console.error('Vaya algo se ha roto')
    console.error(err.message)
}

console.log('Esto de aca esta al final')