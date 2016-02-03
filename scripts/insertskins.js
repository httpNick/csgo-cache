var dbhandle = require('../server/utils/dbhandler')
	, establishdb = require('../server/utils/establishdbconnection')
	, csgomarket = require('csgo-market')
	, allItems = require('./items');

var itemInConsideration = allItems[0];
var wears = [
	'Factory New', 'Minimal Wear',
	'Field-Tested', 'Well-Worn',
	'Battle-Scarred'
];

establishdb((err, db) => {

	var testSkin = {

		item: itemInConsideration.name,
		skin: '',
		wear: '',
		stattrak: false

	};

	for(var x = 0; x < itemInConsideration.skins.length; x++) {
		testSkin.skin = itemInConsideration.skins[x].skinName;
		for (var i = 0; i < wears.length; i++) {
			testSkin.wear = wears[i];
			csgomarket.getSinglePrice(
				testSkin.item,
				testSkin.skin,
				testSkin.wear,
				testSkin.stattrak,
				(err, data) => {
					if (err) {
						console.dir(err);
					} else {
						dbhandle.insertSkin(
							data,
							db,
							(err, r) => {
								if (!err) {
									console.log(r);
								} else {
									console.log(err);
								}
							}
						)
					}
				}
			)
		}
	}
});

/*
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
	*/