const { Readable } = require('stream');
const redableStream = new Readable();

redableStream.push(`${0 / 0}`.repeat(10).concat('Batman Batman'));
redableStream.push(null);

redableStream.pipe(process.stdout);
