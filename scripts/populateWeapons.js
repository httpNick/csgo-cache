/**
 * Created by fermin.romero on 2/19/16.
 */

var dbhandle = require('../server/utils/dbhandler'),
    establishdb = require('../server/utils/establishdbconnection'),
    allWeapons = require('./weapons'),
    wears = require('./wears').wears,
    q = require('q');

// open db connection
establishdb((err, db) => {
    if (err || !db) return err;
    readWeapons(db);
});

// read weapons into memory - denormalize
var readWeapons = (db) =>
{
    var i, j;
    var promises = [];
    for(i = 0; i < allWeapons.length; i++)
    {
        var wepName = allWeapons[i].name;
        var currSkins = allWeapons[i].skins;
        for(j = 0; j < currSkins.length; j++) {
            promises.push(
                collectPromises(
                  currSkins[j].skinName,
                  wepName,
                  db
                )
            );
        }
    }
    q.allSettled(promises).then((res) => {
        console.log("closed connection.");
        db.close();
    })
};

var collectPromises = (skin, wep, db) => {
    return q.Promise((resolve, reject) => {
        var stattrakChoices = [true, false];
        var i, j;
        var promises = [];
        for (i = 0; i < wears.length; i++) {
            for (j = 0; j < stattrakChoices.length; j++) {
                promises.push(
                  dbhandle.insertWeapon(
                    {
                        wep: wep,
                        skin: skin,
                        wear: wears[i],
                        stattrak: stattrakChoices[j]
                    },
                    db
                  )
                );
            }
        }
        q.allSettled(promises).then((res) =>{
           resolve(res);
        });
    });
};