var express = require('express');
var router = express.Router();
var pdf = require('html-pdf');
var pug = require('pug');
var fs = require('fs');

var fn = pug.compileFile('./views/index.pug', {filename: "Resume"});

/* GET created resume and render HTML string to PDF */
router.get('/', function(req, res, next) {
  var data = require('../tmp/data.json');
  pdf.create(fn({ data: data })).toStream(function(err, stream){
    if (err) return console.log(err);
    stream.pipe(res.header('Content-Disposition', 'attachment; filename="Resume.pdf"'));
  });
});

/* POST to save data file */
router.post('/save', function(req, res, next) {
  fs.writeFile('tmp/data.json', JSON.stringify(req.body), function(err) {
    if(err) return console.log(err);
  console.log("file saved!");
  });
});

module.exports = router;
