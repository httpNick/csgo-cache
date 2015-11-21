var csgomarket = require('../csgo-market/index.js');

csgomarket.getSingleStickerPrice('Titan | Cologne 2015', true, function(err, data) {
  if (err) {
      console.log(err);
  } else {
      console.log(data);
  }
});

csgomarket.getSingleKeyPrice('Winter Offensive', function(err, data) {
  if (err) {
      console.log(err);
  } else {
      console.log(data);
  }
});

csgomarket.getSinglePrice('AK-47', 'Vulcan', 'Factory New', false, function(err, data) {
  if (err) {
      console.log(err);
  } else {
      console.log(data);
  }
});

csgomarket.getSingleKnifePrice('Bayonet', 'Fade', 'Factory New', false, function(err, data) {
  if (err) {
      console.log(err);
  } else {
      console.log(data);
  }
});

csgomarket.getSingleKeyPrice('eSports', function(err, data) {
  if (err) {
      console.log(err);
  } else {
      console.log(data);
  }
});
