var express = require('express');
var router = express.Router();
let axios = require('axios')
const FONDO_PATH = 'http://image.tmdb.org/t/p/w1280/';
const IMG_PATH = 'http://image.tmdb.org/t/p/w185/';
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6ab147ef955121e2515503505f30f213';
const API_POPULAR_URL = 'movie/popular'
const API_GENEROS = 'genre/movie/list'
const API_END = '&language=es-ES'
const API_MOVIE ='movie/'



router.get('/:id', async function(req, res, next) {
  let id = +req.params.id
  const results = await axios.get(API_URL + API_MOVIE + id + '?api_key=' + API_KEY + API_END)
  let films = results.data
  res.render('detail', {
    films,
    IMG_PATH
  })
       
  
});

module.exports = router;

