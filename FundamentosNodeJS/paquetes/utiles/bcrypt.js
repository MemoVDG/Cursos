// Trabajo con encriptacion de datos
const bcrypt = require('bcrypt');

const password = '1234segura!';

// Encryptamos la contraseña
bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);
    bcrypt.compare(password, hash, (err, resultado) => {
        console.log(resultado)
    } )
});

