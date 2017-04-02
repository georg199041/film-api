'use strict';

const Promise = require('promise');

// handlers are exported back for use in hapi routes
const Handlers = {};

// Lib contains our business specific logic
const Lib = {};

// our pretend database data
const Database = {
    films: [
        {
            id: 1,
            name: 'The Mummy'
        },
        {
            id: 2,
            name: 'Pants'
        }
    ]
};

// a unit test-able function
Lib.getHome = function getProducts() {

    return new Promise((resolve, reject) => {

        // in other cases fetch all items
        resolve(Database);
    });
};

// hapi route handler
// only this function can call reply
Handlers.get = function get(req, reply) {

    // call business function
    Lib.getHome().done((home) => {
        // api success
        reply({ result: home }).code(200);
    }, (err) => {
        // api error
        reply(err).code(400);
    });
};

module.exports = {
    handlers: Handlers,
    // we only export lib for tests
    /* $lab:coverage:off$ */
    lib:      (process.env.NODE_ENV === 'test') ? Lib : null
    /* $lab:coverage:on$ */
};
