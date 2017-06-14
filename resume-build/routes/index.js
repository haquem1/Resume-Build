var express = require('express');
var router = express.Router();
var pug = require('pug');
var fs = require('fs');
var data = require('../models/data.json');

var PDFDocument = require('pdfkit');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET created resume and render HTML string to PDF */
router.get('/pdf', function(req, res, next) {
  // Compile a function
  var doc = new PDFDocument();
  var filename = req.body.filename;
  // Stripping special characters
  // Stripping special characters
  filename = encodeURIComponent(filename) + '.pdf';
  // Setting response to 'attachment' (download).
  // If you use 'inline' here it will automatically open the PDF
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');
  var content = req.body.content;
  doc.y = 300;
  doc.text(content, 50, 50);
  doc.pipe(res);
  doc.end();
  fs.readFile('./views/index.pug', 'utf8', function (err, file) {
    if (err) throw err;
    console.log(file);
    var fn = pug.compileFile(file);
    // var html = fn({data: data});
    // console.log(html);
    //
    // pdf.create(html).toFile('./resume.pdf', function(err, res) {
    //   if (err) return console.log(err);
    //   console.log(res); // { filename: '/app/businesscard.pdf' }
    // });
  });

  res.render('index', { data : data });
});

/* POST created resume and render HTML string to PDF */
router.post('/makePDF', function(req, res, next) {
  res.render('index', { data : req.body });
});

module.exports = router;
