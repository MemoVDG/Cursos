const assert = require('assert');
const proxyquire = require('proxyquire');
const {moviesMock, MoviesServiceMock} = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('route - movies', () => {
    const route = proxyquire('../routes/movies', {
        '../service/movies' : MoviesServiceMock
    })

    const request = testServer(route);

    describe('GET /movies', () => {
        it('Should response with status 200', (done) => {
            request.get('api/movies').expect(200, done);
        })

        it('Should response with the list of movies', (done) => {
            request.get('api/movies').end((err, res) => {
                assert.deepEqual(res.body,{
                    data: moviesMock,
                    message: 'movies listed'
                });
                done();
            })
        })
    })
})