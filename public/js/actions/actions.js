import AppDispatcher from '../dispatcher/AppDispatcher';
import api from '../utils/csgocacheapicalls';
import {constants} from '../constants/constants';

module.exports = {

  getTest : () => {
    AppDispatcher.dispatch({
      actionType : constants.TEST
    });
    api.search();
  }

};
