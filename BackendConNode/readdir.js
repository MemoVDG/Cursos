const fs = require('fs');

// Leer archivos en el directorio
const files = fs.readdir(__dirname, (err, files) => {
	if (err) {
		return console.log(err);
	}
	console.log(files);
});

// Crear carpetas
// Le decimos que si no existe lo cree
fs.mkdir('nuevoDir/creado', { recursive: true }, (err) => {
	if (err) {
		return console.log(err);
	}
});

// Copiar archivos
fs.copyFile('server.js', 'server-copiado.js', (err) => {
	if (err) {
		console.log(err);
	}

	console.log('Archivo copiado correctamente');
});
