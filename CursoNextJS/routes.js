const routes = (module.export = require('next-routes')());

routes
	.add('index')
	.add('about')
	.add('channel', '/:slug.:id', 'channel')
	.add('podcast', '/:slugChannel.idChannel/:slug.:id', 'podcast');
