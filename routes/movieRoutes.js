const express = require('express');
const movieController = require('../controllers/movieController');
const logger = require('../middleware/logger');

const router = express.Router();

router.get('/popular', logger, movieController.getPopularMovies);
router.get('/topRated', logger, movieController.getTopRatedMovies);
router.get('/trending', logger, movieController.getTrendingMovies);
router.get('/horror', logger, movieController.getHorrorMovies);
router.get('/upcoming', logger, movieController.getUpcomingMovies);
router.get('/search', logger, movieController.getRequestedMovies);
router.get('/discover', logger, movieController.getDiscoveredMovies);
router.get('/details', logger, movieController.getMovieDetails);


module.exports = router;
