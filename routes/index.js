var express = require('express');
var router = express.Router();

var lang = "en"
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { lang: lang });
});

module.exports = router;
