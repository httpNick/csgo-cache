var mongoclient = require('mongodb').MongoClient;

module.exports = (cb) => {

  mongoclient.connect(process.env.CUSTOMCONNSTR_mongo ||
             'mongodb://localhost:27017/csgo-cachedb' ||
              getConnectionString() , (err, db) => {
    if (err) cb(err, null);
    cb(null, db);
  });

};

var getConnectionString = () => {
  return require('./secrets.json').mongo;
};