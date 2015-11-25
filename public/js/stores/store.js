import AppDispatcher from '../dispatcher/AppDispatcher';
import {constants} from '../constants/constants';
import {EventEmitter} from 'events';

let _stuff = {
  datalist : []
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

const CSGOStore = new CSGOStore();

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {

  case constants.TEST_RESPONSE:

    _stuff.datalist.push(action.response.test);
    CSGOStore.emit(constants.CHANGE);
    break;

  default:
    return true;
  }
});

export default CSGOStore;
