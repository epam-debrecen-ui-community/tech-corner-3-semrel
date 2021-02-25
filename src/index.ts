import { version } from '../package.json';
import fetch from 'node-fetch';
import middie from 'middie';
import { fastify } from 'fastify';
import { apiVersionMiddlewareFactory } from './middlewares/version.middleware';
import { randomBeerHandler } from './handlers/random-beer.handler';

const DEFAULT_PORT: number = 3000;
const PORT: number = +process.env.PORT || DEFAULT_PORT;

async function buildServer(): Promise<void> {
    const server = fastify({ logger: { prettyPrint: true }});

    await server.register(middie);
    server.use(apiVersionMiddlewareFactory(version));

    server.get('/api/beers/random', randomBeerHandler);

    await server.listen(PORT);
}

buildServer();
