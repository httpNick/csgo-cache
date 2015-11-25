import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';

module.exports = {

  receiveTest : (data) => {
    AppDispatcher.dispatch({
      actionType: constants.TEST_RESPONSE,
      response: data
    });
  }

};
