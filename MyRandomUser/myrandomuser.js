/**
 * Created by tom-n on 3-5-2017.
 */
var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello Avans!');
})

app.get('/about', function(request, response){
    response.send('Written by Tom');
})

app.post('/', function (request, response) {
    response.send('Hello Avans, Post request received!');
})

app.put('/', function (request, response) {
    response.send('Hello Avans, PUT request recieved!');
})

app.listen(3000, function(){
    console.log('Server app is listening on port 3000');
})

app.all('*', function(request, response){
    response.status(404);
    response.send('404 - Not found');
})