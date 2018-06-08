# Paginator

## Run Test Project

To run the test server, in the root folder execute the fallowing commands:

npm install
npm start

The server wil start at localhost:3000

## Test the aplication

To simplify the test process, all required parameter (numeric values) must be passed through the query string

current_page
total_pages
boundaries
around

Ex: http://localhost:3000/?current_page=19&total_pages=20&boundaries=1&around=1

if one of the parameters is missing or invalid, the fallowing message will apear:

Invalid Arguments

if one of the parameters is lower than 0, the fallowing message will apear:

Parameters must be greater than 0
