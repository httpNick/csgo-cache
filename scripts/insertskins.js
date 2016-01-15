var dbhandle = require('../server/utils/dbhandler')
	, establishdb = require('../server/utils/establishdbconnection')
	, csgomarket = require('csgo-market');

const testSkin = {

	item     : 'AK-47',
	skin     : 'Vulcan',
	wear     : 'Field-Tested',
	stattrak : false

};

establishdb((err, db) => {
	if (!err) {
		csgomarket.getSinglePrice(
			testSkin.item,
			testSkin.skin,
			testSkin.wear,
			testSkin.stattrak,
			(err, data) => {
				dbhandle.insertSkin(
					data,
					db,
					(err, r) => {
						if (!err) {
							console.log(r);
						}
						db.close();
					}
				);
			}
		);
	}
});