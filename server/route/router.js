var express = require('express');
var router = express.Router();

router.get('/api/test', (req, res, next) => {
  res.json({test : 'hello api'});
});

module.exports = router;
