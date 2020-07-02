const assert = require('assert');
const proxyquire = require('proxyquire');
const {getAllStub, MongoLibMock} = require('../utils/mocks/mongoLib');
const {moviesMock} = require('../utils/mocks/movies');
//const movies = require('../utils/mocks/movies');

describe("services - movies", () => {
    const MovieService = proxyquire('../services/movies', {
        '../lib/mongo' : MongoLibMock
    });

    const movieService = new MovieService();
    
    describe("When get movies method is call", async () => {
        it('Should call the get all MongoLib method', async () => {
            await movieService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        })

        it('Should retuyrn an array of movies', async () => {
            const result = await movieService.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        })
    });
})
