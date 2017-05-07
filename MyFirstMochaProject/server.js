/**
 * Created by tom-n on 7-5-2017.
 */

var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('get');
})

app.post('/', function(request, response){
    response.send('post ')
})

app.put('/', function(request, response){
    response.send('put')
})

app.listen(8080, function(){
    console.log('server app is listening on port 8080')
})