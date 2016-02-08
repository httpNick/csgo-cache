import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';

module.exports = {

  receiveSearchRes : (data) => {
    if (typeof(data) != Error) {
      AppDispatcher.dispatch({
        actionType: constants.SEARCH_RESPONSE,
        response: data
      });
    }
  },

  receivePriceRes : (data) => {
    if (typeof(data) != Error) {
      AppDispatcher.dispatch({
        actionType : constants.PRICE_RESPONSE,
        response: data
      });
    }
  }

};
