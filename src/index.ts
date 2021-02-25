import { version } from '../package.json';
import fetch from 'node-fetch';
import middie from 'middie';
import { fastify } from 'fastify';
import { apiVersionMiddlewareFactory } from './middlewares/version.middleware';

const DEFAULT_PORT: number = 3000;
const PORT: number = +process.env.PORT || DEFAULT_PORT;

async function buildServer(): Promise<void> {
    const server = fastify();
    await server.register(middie);
    server.use(apiVersionMiddlewareFactory(version));

    server.get('/api/beers/random', async (req, res) => {
        const URL = 'https://api.punkapi.com/v2/beers';
        const data = await fetch(`${URL}/random`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        const json = await data.json();
        res.status(200).send(json);
    });

    server.listen(PORT).then(() => {
        console.info(`Server started successfully on port ${PORT}.`);
    }).catch(error => {
        console.error(`Server failed to start with the following error: ${error.message}`);
        process.exit(1);
    });
}

buildServer();
