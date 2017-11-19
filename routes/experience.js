var express = require('express');
var stylus = require('stylus');
var router = express.Router();

router.get('/', function(req, res){
  res.render('experience', {
    title: 'Experience'
  });
});

module.exports = router;
