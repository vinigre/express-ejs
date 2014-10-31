var express = require('express');
var router = express.Router();

/* GET sign-up page. */
router.get('/', function(req, res) {
  res.render('signup', { title: 'Express' });
});

module.exports = router;
