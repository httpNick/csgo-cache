import React from 'react';

export default class NavBar extends React.Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">csgo cache</a>
          </div>
        </div>
      </nav>
    );
  }
}
