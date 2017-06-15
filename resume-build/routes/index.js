var express = require('express');
var router = express.Router();
var pug = require('pug');
var fs = require('fs');
var data = require('../models/data.json');

var PDFDocument = require('pdfkit');

var pdf = require('html-pdf');
var fn = pug.compileFile('./views/index.pug', {filename: "index"});
var html = fn({data: data});
var options = { format: 'Letter' };

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET created resume and render HTML string to PDF */
router.get('/pdf', function(req, res, next) {
  pdf.create(html).toStream(function(err, stream){
    if (err) return console.log(err);
    stream.pipe(res);
  });
});

/* POST created resume and render HTML string to PDF */
router.post('/makePDF', function(req, res, next) {
  pdf.create(html).toStream(function(err, stream){
    if (err) return console.log(err);
    stream.pipe(res);
  });
});

module.exports = router;
