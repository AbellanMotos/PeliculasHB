var express = require('express');
var router = express.Router();
let axios = require('axios')
/* let fs = require('fs') */
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6ab147ef955121e2515503505f30f213';
const API_POPULAR_URL = 'movie/popular'
const API_GENEROS = 'genre/movie/list'
const IMG_PATH = 'http://image.tmdb.org/t/p/w185/';
const API_END = '&language=es-ES'

//Llamando a la API

router.get('/', async  (req, res, next) => {
  const results = await axios.get(API_URL + API_POPULAR_URL + '?api_key=' + API_KEY + API_END)
  let films = results.data.results

    res.render('index', { 
      title: 'Express' ,
      films,
      IMG_PATH
    })
  });






module.exports = router;
