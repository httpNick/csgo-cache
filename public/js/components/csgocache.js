import React from 'react';
import NavBar from './navbar';
import store from '../stores/store'
import Search from './search'
import Results from './resultlist'

export default class csgocache extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      datalist: [],
      showResults: false
    }
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
        <Search />
        <Results results={this.state.datalist}/>
        <div id="particles-js"></div>
      </div>
    );
  }
}

particlesJS.load('particles-js', '../assets/particles.json', () => {});
