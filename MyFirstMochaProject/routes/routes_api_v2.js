//API version 2
var express = require('express');
var router = express.Router();
var testjson = require('../recipes.js');


router.get('/info', function(request, response){
    response.status(200);
    response.json({
        "description": "This is API version 2."
    })
})

router.get('/recipes', function(request, response){
    response.json(testjson);
})

router.get('*', function(request, response){
    response.status(404);
    response.json({
        "melding": "error 404 not-found"
    })
})





module.exports = router;