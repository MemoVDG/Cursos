const EventEmmitter = require('events');

// Manera de manejar codigo asincrono orientado a eventos
class Logger extends EventEmmitter {
	execute(callback) {
		console.log('Before');
		this.emit('start');
		callback();
		this.emit('finish');
		console.log('After');
	}
}

const logger = new Logger();

logger.on('start', () => console.log('Start'));
logger.on('finish', () => console.log('Finishing'));
logger.on('finish', () => console.log('Its done'));
logger.execute(() => console.log('hello world'));
