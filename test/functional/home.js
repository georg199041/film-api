'use strict';

// requires for testing
const Code        = require('code');
const expect      = Code.expect;
const Lab         = require('lab');
const lab         = exports.lab = Lab.script();

// use some BDD verbage instead of lab default
const describe    = lab.describe;
const it          = lab.it;
const after       = lab.after;

// require hapi server
const Server = require('../../app.js');

// tests
describe('functional tests - home page', () => {

    it('should get home page', (done) => {

        // make API call to self to test functionality end-to-end
        Server.inject({
            method: 'GET',
            url: '/api/home'
        }, (response) => {

            expect(response.statusCode).to.equal(200);
            expect(response.result.result.films).to.have.length(2);
            done();
        });
    });
});

describe('functional tests - get documentation', () => {

    it('should return documentation html', (done) => {

        // make API call to self to test functionality end-to-end
        Server.inject({
            method: 'GET',
            url: '/'
        }, (response) => {

            expect(response.statusCode).to.equal(200);
            expect(response.result).to.be.a.string();
            done();
        });
    });

    after((done) => {

        // placeholder to do something post tests
        done();
    });
});
