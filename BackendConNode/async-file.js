const fs = require('fs');

// Indica que  va a recibir el archivo como tercer argument de la terminal
// node sync-file.js file-name
const file = process.argv[2];

if (!file) {
	throw new Error('Debes indicar el archivo a leer');
}

const content = fs.readFile(file, (err, content) => {
	if (err) {
		return console.log(err);
	}
	const lines = content.split('\n').length;
	console.log(lines);
});
