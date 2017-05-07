/**
 * Created by tom-n on 7-5-2017.
 */

var express = require('express');
var routes_1 = require('./routes/routes_api_v1')
var routes_2 = require('./routes/routes_api_v2')
var config = require('./config.json');
var app = express();

app.set('PORT', config.webPort);

var port = process.env.PORT || app.get('PORT');





app.all('*', function(request, response, next){
    console.log(request.method + "request.url");
    next();
})

app.use('/api/v1', routes_1);
app.use('/api/v2', routes_2);

app.listen(port, function(){
    console.log('The magic happens at http://localhost ' + port);
});

module.exports = app;

