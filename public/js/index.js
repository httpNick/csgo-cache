import React from 'react';
import ReactDOM from 'react-dom';

var Start = React.createClass({
  getText: function() {
    return 'hi'
  },

  render: function() {
    return (
      <h1 className="jumbotron">{this.getText()}</h1>
    );
  }
});

ReactDOM.render(
  <Start />,
  document.getElementById('example')
)
