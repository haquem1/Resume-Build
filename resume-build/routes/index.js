var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET test HTML page to be converted to PDF. */
router.get('/test', function(req, res, next) {
  var data = require('../tmp/data.json');
  res.render('index', {data: data});
});

module.exports = router;
