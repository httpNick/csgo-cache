import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';
import {EventEmitter} from 'events';

let _stuff = {
  datalist : [],
  lowest : [],
  median : [],
  showChart : false
};

class CSGOStore extends EventEmitter {

  addChangeListener(cb) {
    this.on(constants.CHANGE, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(constants.CHANGE, cb);
  }

  getStuff() {
    return _stuff;
  }

}

const csgostore = new CSGOStore();

AppDispatcher.register((payload) => {
  switch (payload.actionType) {

    case constants.SEARCH_RESPONSE:

      if (payload.response.items) {
        _stuff.datalist = payload.response.items;
      } else {
        _stuff.datalist.push(payload.response);
      }
      _stuff.showChart = false;
      csgostore.emit(constants.CHANGE);
      break;

    case constants.PRICE_RESPONSE:

      payload.response.forEach((ele) => {
        _stuff.lowest.push(parseFloat(ele.skinData[0].lowest_price.slice(1)));
        _stuff.median.push(parseFloat(ele.skinData[0].median_price.slice(1)));
      });
      _stuff.showChart = true;
      csgostore.emit(constants.CHANGE);
      break;

    case constants.CLEARRESULTS:

      _stuff.datalist = [];
      _stuff.lowest = [];
      _stuff.median = [];
      csgostore.emit(constants.CHANGE);
      break;

    case constants.SHOWCHART:
      _stuff.datalist = [];
      _stuff.showChart = true;
      csgostore.emit(constants.CHANGE);
      break;

    default:
      return true;
  }
});

export default csgostore;
