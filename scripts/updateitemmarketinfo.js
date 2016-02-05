var csgomarket, timinginterval, establishdb, dbhandle, q;
csgomarket = require('csgo-market');
establishdb = require('../server/utils/establishdbconnection');
dbhandle = require('../server/utils/dbhandler');
q = require('q');
timinginterval = 180000;

var wears = [
  'Battle-Scarred',
  'Well-Worn',
  'Field-Tested',
  'Minimal Wear',
  'Factory New'
];

var getPriceUpdate = () => {
  establishdb((err, db) => {
    if(!err) {
      console.log('connected!');
      var promises = [];
      wears.forEach((wear) => {
        promises.push(csgomarket.getSinglePriceAsync(
          'AK-47',
          'Vulcan',
          wear,
          false
        ));
      });
      q.allSettled(promises).then((data) => {
        //foreach { state : 'fulfilled', value: { returned data } }
        var promises = [];
        data.forEach((curr) => {
          promises.push(
            dbhandle.insertSkin(
              curr.value,
              db
            )
          );
        });
        q.allSettled(promises).then((res) => {
          console.log('added new round of prices to db');
          console.log('result: ' + res);
          db.close();
        });
      });
    }
  });
};

getPriceUpdate();
setInterval(
  getPriceUpdate,
  timinginterval
);