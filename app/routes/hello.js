var express =require('express');
var router = express();

// Mongoose exports

router.get('/', function(req, res, next){
	var auth = req.header['auth-token'];
	var data = req.body.data;

	// Mongo insert / update / delete query
	

});

router.post('/', function(req, res, next){

});

module.exports = router;