import fetch from 'node-fetch';
import { fastify } from 'fastify';

const DEFAULT_PORT: number = 3000;
const PORT: number = +process.env.PORT || DEFAULT_PORT;

const server = fastify();

server.get('/api/beers/random', async (req, res) => {
    const URL = 'https://api.punkapi.com/v2/beers';
    const data = await fetch(`${URL}/random`, {
        method: 'GET',
        headers: {
            Accepts: 'application/json'
        }
    });
    const json = data.json();
    res.status(200).send(json);
});

server.listen(PORT).then(() => {
    console.info(`Server started successfully on port ${PORT}.`);
}).catch(error => {
    console.error(`Server failed to start with the following error: ${error.message}`);
    process.exit(1);
});


