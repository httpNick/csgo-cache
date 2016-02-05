import AppDispatcher from '../dispatcher/AppDispatcher';
import api from '../utils/csgocacheapicalls';
import {constants} from '../constants/constants';

module.exports = {

  searchForTerm : (term) => {

    api.searchRequest(term, (err, data) => {
      AppDispatcher.dispatch({
        actionType: constants.TEST
      });
    });

  },

  clearResults: () => {
    AppDispatcher.dispatch({
      actionType: constants.CLEARRESULTS
    });
  },

  showChart: () => {
    AppDispatcher.dispatch({
      actionType: constants.SHOWCHART
    })
  }

};
