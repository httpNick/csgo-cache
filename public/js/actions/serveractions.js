import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';

module.exports = {

  receiveTest : (data) => {
    AppDispatcher.dispatch({
      actionType: constants.SEARCH_RESPONSE,
      response: data
    });
  }

};
