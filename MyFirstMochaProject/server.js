/**
 * Created by tom-n on 7-5-2017.
 */

var express = require('express');

var config = require('./config.json');
var app = express();

app.set('PORT', config.webPort);

var port = process.env.PORT || app.get('PORT');



app.get('/', function(request, response){
    response.send('get');
})

app.post('/', function(request, response){
    response.send('post ')
})

app.put('/', function(request, response){
    response.send('put')
})

app.listen(port, function(){
    console.log('The magic happens at http://localhost ' + port);
});