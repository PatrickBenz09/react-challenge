import React, { Component } from 'react';

class Slideshow extends Component {
  render() {
    return(
      <div>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{ this.props.NasaData.title }</h4>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
