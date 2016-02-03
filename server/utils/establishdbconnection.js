var mongoclient = require('mongodb').MongoClient
	, dbconfig = require('../assets/config.db');

module.exports = (cb) => {

	mongoclient.connect('mongodb://httpnick:Passeword6@ds060968.mongolab.com:60968/csgo-cachedb', (err, db) => {
		if (err) cb(err, null);
		cb(null, db);
	});

};
