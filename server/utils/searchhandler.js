var fs = require('fs');
var _ = require('lodash');

var findResults = (term) => {
  fs.readFile('./server/assets/items.json', 'utf8', (err, data) =>{
    if (err) throw err;
    var items = JSON.parse(data);
    var results = {
      weapons: [],
      skins: []
    }
    items.forEach((wep) => {
      wepName = wep.name.toLowerCase();
      if (wepName.indexOf(term) > -1) results.weapons.push(wep.name)
      wep.skins.forEach((skin) => {
          if (skin.skinName.toLowerCase().indexOf(term) > -1){
            results.skins.push(skin.skinName);
            if (results.weapons.indexOf(wep.name) <= -1) {
              results.weapons.push(wep.name);
            }
          }
      });
    });
    return results;
  });
}

module.exports = findResults;
