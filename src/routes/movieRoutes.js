const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/', movieController.getRandomMovie);
router.get('/popular', movieController.getPopularMovies);
router.get('/topRated', movieController.getTopRatedMovies);
router.get('/trending', movieController.getTrendingMovies);
router.get('/horror', movieController.getHorrorMovies);
router.get('/upcoming', movieController.getUpcomingMovies);
router.get('/search', movieController.getRequestedMovies);


module.exports = router;
