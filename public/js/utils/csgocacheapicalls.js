import serveractions from '../actions/serveractions';
import request from 'superagent';

module.exports = {

  searchRequest : (data, cb) => {
    request
      .post('/api/search')
      .send({ searchTerm : data })
      .end((err, res) => {
        if (err) console.log(err);
          serveractions.receiveTest(JSON.parse(res.text));
      })
  },

};
