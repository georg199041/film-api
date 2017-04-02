'use strict';

// requires for testing
const Code      = require('code');
const expect    = Code.expect;
const Lab       = require('lab');
const lab       = exports.lab = Lab.script();

// use some BDD verbage instead of lab default
const describe  = lab.describe;
const it        = lab.it;

// we require the handlers directly, so we can test the "Lib" functions in isolation
const HomeHandlers = require('../../handlers/home');

describe('unit tests - home page', () => {

    it('should return films', (done) => {

        // test lib function
        HomeHandlers.lib.getHome().done((data) => {

            expect(data.films).to.be.an.array().and.have.length(2);

            done();
        }, (err) => {

            done(err);
        });
    });
});
