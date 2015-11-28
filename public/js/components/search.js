import React from 'react';
import {getTest} from '../actions/actions';

export default class Search extends React.Component {

  constructor(...args) {
    super(...args);
  }

  _postTest() {
    getTest();
  }

  render() {
    return (
      <div className="panel">
          <div className="featurette">
             <div className="featurette-inner text-center">
                <form role="form" className="search" id="inputForm">
                   <h3 className="no-margin-top h1">find csgo things</h3>
                   <div className="input-group input-group-lg">
                      <input type="search" className="form-control"></input>
                      <span className="input-group-btn input-space">
                        <button className="btn" type="submit" onClick={this._postTest}>
                          search
                        </button>
                      </span>
                   </div>
                </form>
             </div>
          </div>
      </div>
    )
  }
}
