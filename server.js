var establishdb = require('./server/utils/establishdbconnection');
establishdb((err, db) => {
  if (err) return;
  var express = require('express');
  var app = express();
  var router = require('./server/route/router.js')(db);

  app.engine('html', require('ejs').renderFile);

// use statements
  app.use('/', express.static(__dirname + '/public'));
  app.use('/bower_components', express.static(__dirname + '/bower_components'));
  app.use('/', router);

// set statements
  app.set('view engine', 'html');
  app.set('views', __dirname + '/public/view');

// get statements
  app.get('/', (req, res) => {
    res.render('index');
  });

  var server = app.listen(process.env.PORT || 3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);

    server.on('close', () => {
      db.close();
    });

  });
});
