const express = require('express');
const MovieService = require('../services/movies');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');

// Recibimos un app de tipo express
function moviesAPI(app) {
  // Creamos un objeto Router para el app de express
  const router = express.Router();
  // La indicamos que las peticiones que llegen para
  // "api/movies", las debe de tomar de este router
  app.use('/api/movies', router);

  // Instanciamos nuestro servicio
  const movieService = new MovieService();

  // La funcion es asincrona porque se debe de obtener informacion
  // que puede tardar en llegar, entonces se pone asincrona para
  // no bloquear el hilo principal
  router.get('/', async (req, res, next) => {
    const { tags } = req.query;

    try {
      const movies = await movieService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:movieId', validationHandler({movieId: movieIdSchema}, 'params'), async (req, res, next) => {
    const { movieId } = req.params;
    try {
      const movies = await movieService.getMovie({ movieId });
      res.status(200).json({
        data: movies,
        message: 'movie retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', validationHandler(createMovieSchema), async (req, res, next) => {
    const { body: movie } = req;
    try {
      const createMovieId = await movieService.createMovie({ movie });

      res.status(201).json({
        data: createMovieId,
        message: 'movie created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', validationHandler({movieId: movieIdSchema}, 'params'), validationHandler(updateMovieSchema), async (req, res, next) => {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await movieService.updateMovie({ movieId, movie });
      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', validationHandler({movieId: movieIdSchema}), async (req, res, next) => {
    const { movieId } = req.params;

    try {
      const deletedMovieId = await movieService.deleteMovie({ movieId });
      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesAPI;
