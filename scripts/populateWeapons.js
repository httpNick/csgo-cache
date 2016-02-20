/**
 * Created by fermin.romero on 2/19/16.
 */

var dbhandle = require('../server/utils/dbhandler'),
    establishdb = require('../server/utils/establishdbconnection'),
    allWeapons = require('./weapons'),
    wears = require('./wears');

// open db connection
establishdb((err, db) => {
    if (err) return err;

    readWeapons();
});

// read weapons into memory - denormalize
var readWeapons = () =>
{
    for(var i = 0; i < allWeapons.length; i++)
    {
        console.log(allWeapons[i].name);
    }
};

// insert all weapons