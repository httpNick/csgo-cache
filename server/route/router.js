var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

router.post('/api/search', (req, res, next) => {
  console.log(req.body);
  res.json({test: 'post received'});
});

module.exports = router;
