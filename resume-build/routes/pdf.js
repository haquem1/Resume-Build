var express = require('express');
var router = express.Router();
var pdf = require('html-pdf');
var pug = require('pug');
var fs = require('fs');
var data = require('../models/data.json');

var fn = pug.compileFile('./views/index.pug', {filename: "Resume"});
var html = fn({data: data});

/* GET created resume and render HTML string to PDF */
router.get('/', function(req, res, next) {
  pdf.create(html).toStream(function(err, stream){
    if (err) return console.log(err);
    stream.pipe(res.header('Content-Disposition', 'attachment; filename="Resume.pdf"'));
  });
});

/* POST to save data file */
router.post('/save', function(req, res, next) {
  var html = fn({data: req.body});
  pdf.create(html).toStream(function(err, stream){
    if (err) return console.log(err);
    stream.pipe(res.header('Content-Disposition', 'attachment; filename="Resume.pdf"'));
  });
});

module.exports = router;