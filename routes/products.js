'use strict';

const Handlers      = require('../handlers/products');
const SCHEMAS       = require('../lib/schemas');

const API_BASE_PATH = '/api/products';
const routes = [];

// GET /api/products
routes.push({
    method: 'GET',
    path: API_BASE_PATH,
    config: {
        auth: false,
        handler: Handlers.handlers.get,
        description: 'get products',
        notes: 'This endpoint allows for the retrieval of products.',
        plugins: {
            'hapi-swagger': {
                responses: {
                    '200': { description: 'Success', schema: SCHEMAS.ProductsRes },
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
            schema: SCHEMAS.ProductsRes
        }
    }
});

// GET /api/products/{id}
routes.push({
    method: 'GET',
    path: API_BASE_PATH + '/{id}',
    config: {
        auth: false,
        handler: Handlers.handlers.get,
        description: 'get product by id',
        notes: 'This endpoint allows for the retrieval of products.',
        plugins: {
            'hapi-swagger': {
                responses: {
                    '200': { description: 'Success', schema: SCHEMAS.ProductsRes },
                    '400': { description: 'Bad Request', schema: SCHEMAS.Error }
                },
                security: {}
            }
        },
        tags: ['api'],
        validate: {
            params: SCHEMAS.Validation.productById
        },
        response: {
            schema: SCHEMAS.SingleProductRes
        }
    }
});

module.exports = routes;
