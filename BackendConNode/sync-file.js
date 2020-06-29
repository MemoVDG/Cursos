const fs = require('fs');

try {
	// Indica que  va a recibir el archivo como tercer argument de la terminal
	// node sync-file.js file-name
	const file = process.argv[2];

	const content = fs.readFileSync(file).toString();
	const lines = content.split('\n').length;
	console.log(lines);
} catch (err) {
	console.log('Err', err);
}
