const { testApi, request, getSearchUrl } = require("../api");
const axios = require('axios');

const getRandomMovie = (req, res) => {
    axios.get(testApi)
        .then(response => {
            console.log(response.data)
            res.send(JSON.stringify(response.data))
        })
        .catch()
};

const getPopularMovies = (req, res) => {
    axios.get(request.popular)
        .then(response => {
            console.log(response.data)
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}

const getTopRatedMovies = (req, res) => {
    axios.get(testApi)
        .then(response => {
            console.log(response.data)
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
            console.log(response.data)
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
            console.log(response.data)
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}

const getUpcomingMovies = (req, res) => {
    axios.get(request.movieInfo)
        .then(response => {
            console.log(response.data)
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}

const getRequestedMovies = (req, res) => {
    axios.get(getSearchUrl(req.body.title))
        .then(response => {
            console.log(response.data)
            res.status(200).send(JSON.stringify(response.data));
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ message: 'not found' })
        })
}


module.exports = {
    getRandomMovie,
    getPopularMovies,
    getHorrorMovies,
    getTopRatedMovies,
    getTrendingMovies,
    getUpcomingMovies,
    getRequestedMovies,
};
