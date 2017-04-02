'use strict';

//
// We should store all of our shared schemas in one place
//

const Joi = require('joi');
const SCHEMAS = {};

SCHEMAS.Film = {
    id:   Joi.number(),
    name: Joi.string()
};

SCHEMAS.Product = {
    id:   Joi.number(),
    name: Joi.string()
};

SCHEMAS.Validation = {
    productById: {
        id: Joi.number().required()
    }
};

SCHEMAS.Error = Joi.object({
    error: {
        msg: Joi.string().min(3).description('Human readable error').default('An error has occurred.'),
        type: Joi.string().min(3).description('Type of error').default('GENERIC_ERR')
    }
}).label('Error');

SCHEMAS.ProductsRes = Joi.object({
    result: Joi.array().items(SCHEMAS.Product)
}).label('Response');

SCHEMAS.SingleProductRes = Joi.object({
    result: SCHEMAS.Product
}).label('Response');

SCHEMAS.HomePageRes = Joi.object({
    result: Joi.object({
        films: Joi.array().items(SCHEMAS.Film)
    })
}).label('Response');

module.exports = SCHEMAS;
