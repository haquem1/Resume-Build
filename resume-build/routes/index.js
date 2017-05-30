var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Home' });
});

/* GET created resume and render HTML string to PDF */
router.get('/pdf', function(req, res, next) {
  res.locals.name = "Gabriel Almendarez";
  res.locals.email = "email";
  res.locals.phone = "8185551234";
  res.locals.school = "school";
  res.locals.major = "major";
  res.locals.courses = "course";
  res.locals.awards = "awards";
  res.locals.experience = {
      job: "jobTitle",
      company: "company",
      dateWorked: "dates worked",
      desc: "desc"
  };
  res.render('index', { title: 'Pdf' });
});

module.exports = router;
