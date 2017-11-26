var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('items', {
    title: 'Items',
    description: "Hi I'm Shaan. I spend my time in Chicago as a full-time Software Engineer and part-time rock climber"
  });
});

module.exports = router;
