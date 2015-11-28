var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var searchutil = require('../utils/searchhandler');

router.use( bodyParser.json() );
router.use(bodyParser.urlencoded({
  extended: true
}));

router.post('/api/search', (req, res, next) => {
  var term = req.body.searchTerm;
  searchutil(term.toLowerCase());
  res.json({test: 'post received'});
});

module.exports = router;
