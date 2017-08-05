var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LoremSite' });
});

/* GET menu1 page. */
router.get('/menu1', function(req, res, next) {
  res.render('menu1', { title: 'LoremSite - Menu1' });
});

/* GET menu2 page. */
router.get('/menu2', function(req, res, next) {
  res.render('menu2', { title: 'LoremSite - Menu2' });
});

/* GET menu3 page. */
router.get('/menu3', function(req, res, next) {
  res.render('menu3', { title: 'LoremSite - Menu3' });
});

/* GET menu4 page. */
router.get('/menu4', function(req, res, next) {
  res.render('menu4', { title: 'LoremSite - Menu4' });
});

/* GET menu5 page. */
router.get('/menu5', function(req, res, next) {
  res.render('menu5', { title: 'LoremSite - Menu5' });
});

module.exports = router;
