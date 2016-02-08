import React from 'react';
import {showChart} from '../actions/actions'

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  _handleResultClick(item, event) {
    event.preventDefault();
    showChart(item.item, item.skin);
  }

  render() {
    return (
      <div className="list-panel">
        <div className="panel-body fixed-panel">
          <ul className="no-list-style-type">
            {
              this.props.results.map((item, index) => {
                if (item.item) {
                  return <li key={index} onClick={this._handleResultClick.bind(this, item)}><a
                    href="#"> {item.item} {item.skin} </a></li>;
                } else {
                  return <li key={index}> {item.nores} </li>;
                }
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
