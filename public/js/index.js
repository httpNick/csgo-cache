import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav/navbar';

class App extends React.Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1 className="jumbotron">Hello from an ES6 class</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)
