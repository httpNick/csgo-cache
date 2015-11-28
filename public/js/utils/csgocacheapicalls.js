import serveractions from '../actions/serveractions';
import request from 'superagent';

module.exports = {

  search: () => {
    request
      .post('/api/search')
      .send({ post: 'data', here: 'wahoo' })
      .end((err, res) => {
        console.log(res);
      });
  }
};
