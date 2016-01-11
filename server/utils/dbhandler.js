var mongoclient = require('mongodb').MongoClient
, dbconfig = require('../assets/config.db.json');

module.exports = {

  findSingleItem : (term, cb) => {
    mongoclient.connect(dbconfig.url, (err, db) => {
      if(err) return err;
      db.collection('csgo-cache').findOne((err, doc) => {
        if(err) cb(err, null);
        if (doc != null) {
          db.close();
          cb(null, doc);
        } else {
          db.close();
          cb(null, null);
        }
      });
    });
  },

  findItems: (input, cb) => {
    /*
    results = [];
    cursor.each((err, doc) => {
      if (err) cb(err, null);
      if (doc != null) {
        results.push(doc);
      } else {
        db.close();
        cb(null, results);
      }
    });
    */
  }

}
