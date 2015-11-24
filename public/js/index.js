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

class TestEsSixComponent extends React.Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div>
        <h1 className="jumbotron">Hello from an ES6 class</h1>
        <Start />
      </div>
    );
  }
}

ReactDOM.render(
  <TestEsSixComponent />,
  document.getElementById('example')
)
