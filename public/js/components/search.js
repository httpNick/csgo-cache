import React from 'react';

export default class Search extends React.Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className="panel">
          <div className="featurette">
             <div className="featurette-inner text-center">
                <form role="form" className="search" id="inputForm">
                   <h3 className="no-margin-top h1">search things</h3>
                   <div className="input-group input-group-lg">
                      <input type="search" className="form-control"></input>
                      <span className="input-group-btn">
                        <button className="btn btn-success" type="submit" value="Submit">Search</button>
                      </span>
                   </div>
                </form>
             </div>
          </div>
      </div>
    )
  }
}
