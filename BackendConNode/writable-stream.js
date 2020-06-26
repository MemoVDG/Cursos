const { Writable } = require('stream');

const writableStram = new Writable({
	write(chunk, encoding, callback) {
		console.log(chunk.toString());
		callback();
	},
});

process.stdin.pipe(writableStram);
