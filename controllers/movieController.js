const { testApi, request, getSearchUrl } = require("../api");
const axios = require('axios');

const getPopularMovies = (req, res) => {
    axios.get(request.popular)
        .then(response => {
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}

const getTopRatedMovies = (req, res) => {
    axios.get(request.topRated)
        .then(response => {
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}

const getTrendingMovies = (req, res) => {
    axios.get(request.trending)
        .then(response => {
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}

const getHorrorMovies = (req, res) => {
    axios.get(request.horror)
        .then(response => {
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}

const getUpcomingMovies = (req, res) => {
    axios.get(request.upcoming)
        .then(response => {
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}

const getRequestedMovies = (req, res) => {
    axios.get(getSearchUrl(req.query.title))
        .then(response => {
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}

const getDiscoveredMovies = async (req, res) => {

try {

    const response = await fetch(testApi, {
      method: 'GET', 
      headers: {
	accept: 'application/json',
	Authorization: `Bearer ${process.env.TMDB_API_KEY}`
      }
    });

    if (!response.ok) {
	return res.status(404).send({ message: 'failed to get movies' })
    }

    const data = await response.json();
    res.status(200).send(JSON.stringify(data));
 } 
 catch(err) {
        console.log(err.message)
	res.status(404).send({ message: 'failed to get movies' })
 } 
   
}


module.exports = {
    getPopularMovies,
    getHorrorMovies,
    getTopRatedMovies,
    getTrendingMovies,
    getUpcomingMovies,
    getRequestedMovies,
    getDiscoveredMovies,
};
