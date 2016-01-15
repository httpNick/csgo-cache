module.exports = {

  findSingleItem : (term, db, cb) => {
      db.collection('csgo-cache')
        .find({item:term})
        .limit(1)
	      .next((err, doc) => {
		      if (err) cb(err, null);
          if (doc != null) {
            cb(null, doc);
          } else {
            cb(null, null);
          }
        });
  },

	insertItem : (name, skins, db) => {
		db.collection('items')
		.insertMany(
			[{name: name, skins: skins}],
			{w:1},
			(err, r) => {
				if (err) {
					console.log(err)
				} else {
					console.log(r);
				}
			})
	},

	insertSkin : (name, wear, stattrak, skindata) => {

	}

  /*
  findItems: (input, cb) => {
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
  }
  */

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
