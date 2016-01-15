var jsonstream = require('JSONStream')
	, es = require('event-stream')
	, fs = require('fs')
	, dbhandle = require('../server/utils/dbhandler')
	, establishdb = require('../server/utils/establishdbconnection');

establishdb((err, db) => {
	if (err) {
		console.log(err);
		return err;
	} else {
		var rs = fs.createReadStream(__dirname + '/items.json');

		rs.on('open', () => {
			rs
				.pipe(jsonstream.parse('*'))
				.pipe(es.mapSync((data) => {
					var skins = [];
					for (i = 0; i < data.skins.length; i++) {
						skins.push(data.skins[i].skinName);
					}

					dbhandle.insertItem(
						data.name,
						skins,
						db
					);

					return data;
				}));
		});
	}
});
