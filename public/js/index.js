import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import TheButton from './components/thebutton';
import store from './stores/store'

class App extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = store.getStuff();
  }

  componentDidMount() {
    store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    store.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(store.getStuff());
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1 className="jumbotron text-center">
          <TheButton />
        </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)
