module.exports = {

  findSingleItem : (term, db, cb) => {
      db.collection('csgo-cache').findOne((err, doc) => {
        if(err) cb(err, null);
        if (doc != null) {
          cb(null, doc);
        } else {
          cb(null, null);
        }
      });
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
