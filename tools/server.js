import polyfill from 'babel-polyfill';
import Koa from 'koa';
import koaStatic from 'koa-static';
import mount from 'koa-mount';
import React from 'react';
import ReactDOM, {renderToString} from 'react-dom/server';
import {RouterContext, match}from 'react-router';
import fs from 'fs';
import path from 'path';
//import App from '../App';

import routesContainer from '../src/routes';
//import favicon from 'favicon.ico';
const favicon = '';
const indexHTML = fs.readFileSync(path.resolve('index.html')).toString();

try {
	const app      = new Koa();
	const hostname = process.env.HOSTNAME || 'localhost';
	const port     = process.env.PORT || 8000;
	let   routes   = routesContainer;

	app.use(mount('/static', koaStatic('static')));

	app.use(async (ctx, next) => {
    const webserver = __PRODUCTION__ ? '' : `//${ctx.hostname}:8080`;
    const location  = ctx.path;

    match({routes, location}, (error, redirectLocation, renderProps) => {
      if(redirectLocation) {
        ctx.redirect(redirectLocation.pathname + redirectLocation.search, '/');
        return;
      }

      if(error || !renderProps) {
        next(error);
        return;
      }

      const reactString = renderToString(<RouterContext {...renderProps}/>);
      ctx.type = 'text/html';
      ctx.body = indexHTML.replace('<!-- {{app}} -->', reactString);
    });
	});

	app.listen(port, () => {
		console.info('==> ✅  Server is listening');
		console.info('==> 🌎  Go to http://%s:%s', hostname, port);
	});

	if (__DEV__) {
		if (module.hot) {
			console.log('[HMR] Waiting for server-side updates');

			module.hot.accept('../src/routes', () => {
				routes = require('../src/routes');
			});

			module.hot.addStatusHandler((status) => {
				if (status === 'abort') {
					setTimeout(() => process.exit(0), 0);
				}
			});
		}
	}
}
catch (error) {
	console.error(error.stack || error);
	throw error;
}
