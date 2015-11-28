import React from 'react';
import {getTest} from '../actions/actions';

export default class TheButton extends React.Component {

  constructor(...args) {
    super(...args);
  }

  _add() {
    getTest();
  }

  render() {
    return (
      <button type="button" className="btn btn-default" onClick={this._add}>
        press
      </button>
    );
  }
}
