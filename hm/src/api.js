import {filterOutTitles} from './utils'

const BASE_URL = 'http://www.omdbapi.com/?'
const API_KEY = '88a3f396' //I am aware that this should not be in an actual app

export const fetchMovieTitles = query => {
   const queryString = `${BASE_URL}apikey=${API_KEY}&s=${query}`
   return fetch(queryString)
    .then(response => response.json())
    .then(json => filterOutTitles(json))
}