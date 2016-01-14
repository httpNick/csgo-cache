import serveractions from '../actions/serveractions';
import request from 'superagent';

module.exports = {

  searchRequest : (data, cb) => {
    request
      .post('/api/search')
      .send({ searchTerm : data })
      .end((err, res) => {
        if (err) cb(err, null);
	      var parsedJSON = JSON.parse(res.text);
	      serveractions.receiveTest(parsedJSON);
	      cb(null, parsedJSON);
      });
  }

};
