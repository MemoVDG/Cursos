const { Readable } = require('stream');
const redableStream = new Readable({
	read(size) {
		setTimeout(() => {
			if (this.currentCharCode > 90) {
				this.push(null);
				return;
			}
			this.push(String.fromCharCode(this.currentCharCode++));
		}, 1000);
	},
});

redableStream.currentCharCode = 65;
redableStream.pipe(process.stdout);
