import React from 'react';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="list-panel">
        <div className="panel-body fixed-panel">
          <ul>
            {
              this.props.results.map((item, index) => {
                return <p key={index}> {item} </p>;
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
