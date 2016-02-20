var q = require('q');

const collections = {
	items : 'items',
	weapons : 'weapons',
	overviews : 'overviews'
};

module.exports = {

  findSingleItem : (term, db, cb) => {
      db.collection(
	      collections.items
      ).find(
	      {
		      name : term
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

  findPricesForItem : (item, skin, db) => {
    return new Promise((resolve, reject) => {
      db.collection(
        collections.skins
      ).find(
        {
          itemName : item,
          skinName : skin
        },
        {
          skinData : 1
        }
      ).toArray(
        (err, doc) => {
          if (err) reject(err);
          if (doc) {
            resolve(doc);
          }
        }
      )
    });
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

	insertOverview : (bundle, db) => {
		return q.Promise((resolve, reject) => {
			db.collection(
				collections.overviews
			).insertOne(
				{
					weapon_id: bundle.id,
					lowest_price: bundle.lowest_price,
					median_price: bundle.median_price,
					volume: bundle.volume,
					created_on: new Date().getTime()
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
