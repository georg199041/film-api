'use strict';

const Handlers      = require('../handlers/home');
const SCHEMAS       = require('../lib/schemas');

const API_BASE_PATH = '/api/home';
const routes = [];

// GET /api/home
routes.push({
    method: 'GET',
    path: API_BASE_PATH,
    config: {
        auth: false,
        handler: Handlers.handlers.get,
        description: 'get data for home page',
        notes: 'This endpoint allows for the retrieval components of home page.',
        plugins: {
            'hapi-swagger': {
                responses: {
                    '200': { description: 'Success', schema: SCHEMAS.HomePageRes },
                    '400': { description: 'Bad Request', schema: SCHEMAS.Error }
                },
                security: {}
            }
        },
        tags: ['api'],
        validate: {
            query: {
            }
        },
        response: {
            schema: SCHEMAS.HomePageRes
        }
    }
});

module.exports = routes;
