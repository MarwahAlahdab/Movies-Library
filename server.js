
const express = require('express')
const data = require('./Movie Data/data.json')


const server = express()

const PORT = 3003;

server.listen(PORT , ()=> {

    console.log(`Listening on ${PORT}`)
})


// Build the following routes using the GET request:

// Home Page Endpoint: /

// Create a route with a method of get and a path of /. The callback should use the provided JSON data.
// Create a constructor function to ensure your data follow the same format.

server.get('/', (req,res) =>{

const movie = new Movie(data.title, data.poster_path, data.overview);


res.send(JSON.stringify({
    title: movie.title,
    poster_path: movie.poster_path,
    overview: movie.overview
  }));
})


  
// function Movie(title, poster_path, overview) {
//     this.title = title;
//     this.poster_path = poster_path;
//     this.overview = overview;
//   }


  server.get('/favorite', (req,res) =>{

    res.send('Welcome to Favorite Page')
    
    })


//     Handle errors
// Create a function to handle the server error (status 500)
// Create a function to handle "page not found error" (status 404)


server.get('*', (req,res) =>{

    res.status(500).send({
        status: 500,
        responseText: 'Sorry, something went wrong'
      })
    
    })



    server.get('*', (req,res) =>{

        res.status(400).send('Sorry, page not found')
        
        })



        //lab14


        const cors = require('cors')
        server.use(cors())
        const axios = require('axios');
        server.get('/trending', trendingHandler)
        server.get('/search/:query', searchingHandler)
        server.get('/movie/:id', getByID)
        server.get('/movie/:id/credits', getMovieCridets)

        server.use(errorHandler)
        require('dotenv').config();
        const apiKey = process.env.APIkey;
       

        



         function trendingHandler(req,res){
        const url=`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`
        try{
        axios.get(url)
        .then(result=>{
        
          let mapResult = result.data.results.map( item =>{

            let singleMovie = new Movie(item.id,item.title, item.release_date, item.poster_path, item.overview)
            return singleMovie
          })
          res.send(mapResult)
   
        }).catch((error)=> {
          console.log('something went wrong', error)
          res.status(500).send(error)
        })
      }catch(error){
        errorHandler(error,req,res)
      }
        
  
        }






        function searchingHandler(req, res){
          const movieName = req.params.query;
          const url=`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US&query=${movieName}`
          try{
          axios.get(url)
          .then(result=>{
          
            let mapResult = result.data.results.map( item =>{
  
              let singleMovie = new Movie(item.id,item.title, item.release_date, item.poster_path, item.overview)
              return singleMovie
            })
            res.send(mapResult)
     
          }).catch((error)=> {
            console.log('something went wrong', error)
            res.status(500).send(error)
          })
        }catch(error){
          errorHandler(error,req,res)
        }
        }


        // Get movie details by ID


        function getByID(req, res){
          const movieID= req.params.movieID;
          const url=`https://api.themoviedb.org/3/movie/${movieID}?api_key=${APIKey}`
          try{
          axios.get(url)
          .then(result=>{
          
            let mapResult = result.data.results.map( item =>{
  
              let singleMovie = new Movie(item.id,item.title, item.release_date, item.poster_path, item.overview)
              return singleMovie
            })
            res.send(mapResult)
     
          }).catch((error)=> {
            console.log('something went wrong', error)
            res.status(500).send(error)
          })
        }catch(error){
          errorHandler(error,req,res)
        }

        }

//Get movie credits by ID


function getMovieCridets(req, res){
  const movieID= req.params.movieID;
  const url=`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${APIKey}`
  try{
  axios.get(url)
  .then(result=>{
  
    const cast = result.data.cast.map(actor => actor.name);
   
    res.send(cast)

  }).catch((error)=> {
    console.log('something went wrong', error)
    res.status(500).send(error)
  })
}catch(error){
  errorHandler(error,req,res)
}

}






        function Movie(id,title, release_date, poster_path,overview) {
          this.id=id;
          this.title = title;
          this.release_date=release_date
          this.poster_path = poster_path;
          this.overview = overview;
        }

        function errorHandler(error,req,res){

          const err={
            status :500,
            message: error}
            res.status(500).send(err)
          }
        
