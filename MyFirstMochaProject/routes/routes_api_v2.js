//API version 2
var express = require('express');
var router = express.Router();


router.get('/info', function(request, response){
    response.status(200);
    response.json({
        "description": "This is API version 2."
    })
})

router.get('*', function(request, response){
    response.status(404);
    response.json({
        "melding": "error 404 not-found"
    })
})



module.exports = router;