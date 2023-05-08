# Movies-Library

# Movies-Library - Version 1

**Author Name**: Marwah Alahdab

## WRRC
![](assets/HTTP%20request.png)

## Overview

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
- clone the repo
- install everything like node js and express
- write npm start on terminal
- they can use browser on thunder client to send requests



## Project Features
<!-- What are the features included in this app -->
### this app included many features as:
- The app listens on port 3002.

- The app has a constructor function called Movie that accepts parameters for title, poster path, and overview to ensure data format.


- The app has the following routes using the GET request:
1. The '/' Home page rout
2. The '/favorite'  route 


- The app has an error handling route for status 500 and 404

- The app is connected to database

- we added three methods for update, delete, and get movie:

Endpoint for updateMovieHandler: /UPDATE/{id}
Endpoint for deleteMovieHandler: /DELETE/{id}
Endpoint for getMovieHandler: /getMovie?id={id}

