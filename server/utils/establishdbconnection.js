var mongoclient = require('mongodb').MongoClient
	, dbconfig = require('../assets/config.db');

module.exports = (cb) => {

	mongoclient.connect(dbconfig.url, (err, db) => {
		if (err) cb(err, null);
		cb(null, db);
	});

};