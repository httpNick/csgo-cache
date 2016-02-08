var express = require('express')
  , router = express.Router()
  , bodyParser = require('body-parser')
  , dbhandler = require('../utils/dbhandler')
  , dataformat = require('../utils/dataformatter');



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
		        res.json({ items: dataformat.breakUpPerSkin(document)});
	        } else {
		        res.json({nores: 'no result found'});
	        }
        })
  });

  router.post('/api/getPrice', (req, res, next) => {
    var item = req.body.item;
    var skin = req.body.skin;
    dbhandler.findPricesForItem(item, skin, dbConn)
      .then((document) => {
        console.log(document);
        res.json(document);
      }, (err) => {
        console.log(err);
        res.err(err);
      });
  });

  return router;
};