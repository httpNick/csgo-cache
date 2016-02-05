import React from 'react';
import {searchForTerm, clearResults} from '../actions/actions';

export default class Search extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      value : ''
    };
  }

  _handleChange(event) {
    this.setState({
        value: event.target.value
      });
  }

  _handleSubmit(event) {
    event.preventDefault();
    clearResults();
    searchForTerm(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div className="search-panel">
          <div className="featurette">
             <div className="featurette-inner text-center">
                <form role="form" className="search" id="inputForm" onSubmit={this._handleSubmit.bind(this)}>
                   <h3 className="no-margin-top h1">find csgo things</h3>
                   <div className="input-group input-group-lg">
                      <input type="search" placeholder="ex. AK-47" value={this.state.value} className="form-control" onChange={this._handleChange.bind(this)}></input>
                      <span className="input-group-btn input-space">
                        <button className="btn" type="submit">
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
