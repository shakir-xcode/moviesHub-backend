const testApi = 'https://jsonplaceholder.typicode.com/todos/1';


const apiKey = '1982aef0e1f11c0677b20dc7b708bb87';

const request = {
    popular: 'https://api.themoviedb.org/3/movie/popular?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=1',
    topRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=1',
    trending: 'https://api.themoviedb.org/3/movie/popular?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=2',
    horror: 'https://api.themoviedb.org/3/search/movie?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&query=horror&page=1&include_adult=false',
    upcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US&page=1',
    movieInfo: 'https://api.themoviedb.org/3/movie/343611?api_key=1982aef0e1f11c0677b20dc7b708bb87&language=en-US'
}

const getSearchUrl = title => `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=1982aef0e1f11c0677b20dc7b708bb87`;


module.exports = { testApi, request, getSearchUrl }