import serveractions from '../actions/serveractions';
import request from 'superagent';

module.exports = {

  searchRequest : (data) => {
      request
        .post('/api/search')
        .send({searchTerm: data})
        .end((err, res) => {
          if (err) serveractions.receiveSearchRes(new Error(err));
          var parsedJSON = JSON.parse(res.text);
          serveractions.receiveSearchRes(parsedJSON);
        });
  },

  priceRequest : (item, skin) => {
    request
      .post('/api/getPrice')
      .send({item : item, skin : skin})
      .end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(JSON.parse(res.text));
        }
      });
  }

};
