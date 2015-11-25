import serveractions from '../actions/serveractions';
import request from 'superagent';

module.exports = {

  get: () => {
    request.get('/api/test')
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) return console.error(err);

        serveractions.receiveTest(response.body);
      });
  }

};
