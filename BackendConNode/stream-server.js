const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
	// Nos permite ahorrar memoria al momento de leer archivos muy grandes
	const src = fs.createReadStream('./big');
	src.pipe(res);
});

server.listen(3000);
