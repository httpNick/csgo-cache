import React from 'react';
import {showChart} from '../actions/actions'

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  _handleResultClick(event) {
    event.preventDefault();
    showChart();
  }

  render() {
    return (
      <div className="list-panel">
        <div className="panel-body fixed-panel">
          <ul className="no-list-style-type">
            {
              this.props.results.map((item, index) => {
                return <li key={index} onClick={this._handleResultClick.bind(this)}> <a href="#"> {item} </a></li>;
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
