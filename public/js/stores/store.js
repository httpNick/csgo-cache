import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';
import {EventEmitter} from 'events';

let _stuff = {
  datalist : [],
  showResults : false
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

  case constants.TEST_RESPONSE:

    _stuff.datalist.push(payload.response);
    _stuff.showResults = false;
    csgostore.emit(constants.CHANGE);
    break;

  default:
    return true;
  }
});

export default csgostore;
