var q = require('q');

const collections = {
	items : 'items',
	skins : 'skins',
	test  : 'csgo-cache'
};

module.exports = {

  findSingleItem : (term, db, cb) => {
      db.collection(
	      collections.test
      ).find(
	      {
		      item : term
	      }
      ).limit(
	      1
      ).next(
	      (err, doc) => {
		      if (err) cb(err, null);
          if (doc != null) {
            cb(null, doc);
          } else {
            cb(null, null);
          }
        }
      );
  },

	insertItem : (name, skins, db, cb) => {
		db.collection(
			collections.items
		).insertMany(
			[
				{
					name  : name,
					skins : skins
				}
			],
			{
				w : 1
			},
			(err, r) => {
				if (err) {
					cb(err, null);
				} else {
					cb(null, r);
				}
			}
		);
	},

	insertSkin : (bundle, db) => {
		return q.Promise((resolve, reject) => {
			db.collection(
				collections.skins
			).insertMany(
				[
					{
						itemName: bundle.wep,
						skinName: bundle.skin,
						wear: bundle.wear,
						stattrak: bundle.stattrak,
						skinData: [
							{
								lowest_price: bundle.lowest_price,
								median_price: bundle.median_price,
								volume: bundle.volume,
								updated_on: new Date().getTime()
							}
						]
					}
				],
				{
					w: 1
				},
				(err, r) => {
					if (err) {
						reject(err);
					} else {
						resolve(r);
					}
				}
			);
		});
	}

  // db['csgo-cache'].update( { item: "AK-47", skins : { $elemMatch : { skin : { $eq: "Vulcan" }, "wear" :{ $eq:  "Factory New" } } } }, { $set : { "skins.$.lowest_price" : 81.00 } } )
  /*
  updateItem: (item, cb) => {
    mongoclient.connect(dbconfig.url, (err, db) => {
      db.collection('csgo-cache').updateOne(
          {item : item.name},
          {$set: { }}
      );
    });
  }
  */

};
