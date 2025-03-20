const testApi = 'https://jsonplaceholder.typicode.com/todos/1';


const apiKey = process.env.TMDB_API_KEY;

const request = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
    horror: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1&include_adult=false`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    movieInfo: `https://api.themoviedb.org/3/movie/343611?api_key=${apiKey}&language=en-US`,
    discover: `https://api.themoviedb.org/3/discover/movie/`
}

const getSearchUrl = title => `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${apiKey}`;


module.exports = { testApi, request, getSearchUrl }