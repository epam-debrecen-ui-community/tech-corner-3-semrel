import fetch from 'node-fetch';
import { FastifyReply, FastifyRequest, RouteHandler } from 'fastify';

export const randomBeerHandler: RouteHandler = async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    const URL = 'https://api.punkapi.com/v2/beers';
    const data = await fetch(`${URL}/random`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });
    const json = await data.json();
    res.status(200).send(json);
}
