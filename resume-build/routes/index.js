var express = require('express');
var router = express.Router();
var data = require('../models/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET created resume and render HTML string to PDF */
router.get('/pdf', function(req, res, next) {
  res.render('index', { data : data });
});

/* POST created resume and render HTML string to PDF */
router.post('/makePDF', function(req, res, next) {
  res.render('index', { data : req.data });
});

module.exports = router;
