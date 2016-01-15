var express = require('express')
  , router = express.Router()
  , bodyParser = require('body-parser')
  , dbhandler = require('../utils/dbhandler');



module.exports = function(dbConn) {
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({
    extended: true
  }));

  router.post('/api/search', (req, res, next) => {
    var term = req.body.searchTerm;
    dbhandler.findSingleItem(term, dbConn, (err, document) => {
          if (err) res.json({ test: err });
	        if (document) {
		        res.json({ test: document.item });
	        } else {
		        res.json({test: 'no result found'});
	        }
        })
  });

  return router;
};
