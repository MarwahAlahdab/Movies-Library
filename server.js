
const express = require('express')
const data = require('./Movie Data/data.json')


const server = express()

const PORT = 3002;

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


  
function Movie(title, poster_path, overview) {
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
  }


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