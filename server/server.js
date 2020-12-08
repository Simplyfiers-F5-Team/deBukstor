'use strict';

import { configuration } from './configuration.js';
import { default as express } from 'express';

const _server = express()
const _port = configuration.server.port;

async function start() {
	_server.listen( _port, () => {
		console.log( `Server listening at http://localhost:${_port}` )
	})
}

export const server = {
	start
};
