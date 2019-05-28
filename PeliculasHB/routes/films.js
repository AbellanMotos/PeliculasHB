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


//Imprimir peliculas

router.get('/', async  (req, res, next) => {
  const results = await axios.get(API_URL + API_POPULAR_URL + '?api_key=' + API_KEY + API_END)
  let films = results.data.results
 
    res.render('index', { 
      title: 'abc films' ,
      films,
     })
  });

//Ordenar de la A a la Z

router.get('/orderfilms', async  (req, res, next) => {
  const results = await axios.get(API_URL + API_POPULAR_URL + '?api_key=' + API_KEY + API_END)
  let films = results.data.results
  
  
    films.sort( (a, b) => {
        let film1 = a.title
        let film2 = b.title
        if (film1 > film2) {
            return 1
        } else if (film1 < film2) {
            return -1
        } return 0
        })
      
      
    res.render('orderfilms', { 
      title: 'abc films' ,
      films,
      
     })
  });

  //Detalle pelicula

  router.get('/film/:id', async function(req, res, next) {
    let id = +req.params.id
    const results = await axios.get(API_URL + API_MOVIE + id + '?api_key=' + API_KEY + API_END)
    let films = results.data
    res.render('detail', {
      films,
      IMG_PATH,
      FONDO_PATH
    })
         
    
  });

  //Ordenar de la Z a la A

  router.get('/orderfilms2', async  (req, res, next) => {
    const results = await axios.get(API_URL + API_POPULAR_URL + '?api_key=' + API_KEY + API_END)
    let films = results.data.results
    
    
      films.sort( (a, b) => {
          let film1 = a.title
          let film2 = b.title
          if (film1 < film2) {
              return 2
          } else if (film1 > film2) {
              return 1
          } return 0
          })
        
        
      res.render('orderfilms2', { 
        title: 'abc films' ,
        films,
        
       })
    });

module.exports = router;

