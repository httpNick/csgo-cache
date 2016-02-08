import AppDispatcher from '../dispatcher/AppDispatcher';
import api from '../utils/csgocacheapicalls';
import {constants} from '../constants/constants';

module.exports = {

  searchForTerm : (term) => {

    api.searchRequest(term);

  },

  clearResults: () => {
    AppDispatcher.dispatch({
      actionType: constants.CLEARRESULTS
    });
  },

  showChart: (item, skin) => {
    api.priceRequest(item, skin);
    AppDispatcher.dispatch({
      actionType: constants.SHOWCHART
    })
  }

};
