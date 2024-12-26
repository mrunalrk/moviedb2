import { constants } from './env';

export function createMovieUrl(path){
    return constants.REACT_APP_MOVIE_BASE_URL + "/movie" + path + '?api_key=' + constants.REACT_APP_API_KEY + '&language=en-US';
}

export function createSingleMovieUrl(id){
    return constants.REACT_APP_MOVIE_BASE_URL + '/movie/' + id + '?api_key=' + constants.REACT_APP_API_KEY + '&language=en-US';
}

export function createMovieCastUrl(id){
    return constants.REACT_APP_MOVIE_BASE_URL + '/movie/' + id + '/credits?api_key=' + constants.REACT_APP_API_KEY + '&language=en-US';
}

export function createSearchMovieUrl(query){
    return constants.REACT_APP_MOVIE_BASE_URL + '/search/movie?api_key=' + constants.REACT_APP_API_KEY + '&language=en-US&query=' + query;
}

export function log(message){
    console.log(message);
}