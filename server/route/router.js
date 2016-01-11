var express = require('express')
, router = express.Router()
, bodyParser = require('body-parser')
, searchutil = require('../utils/searchhandler')
, dbhandler = require('../utils/dbhandler');

router.use( bodyParser.json() );
router.use(bodyParser.urlencoded({
  extended: true
}));

router.post('/api/search', (req, res, next) => {
  var term = req.body.searchTerm;
  dbhandler.findSingleItem(term, (err, result) => {
    if(err) console.log(err);
    res.json({test: result.someprop})
  });
  //searchutil(term.toLowerCase());
});

module.exports = router;
