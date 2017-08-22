import React, { Component } from 'react';

class List extends Component {
  render() {
    return(
      <div>
        <div className="row">
          { this.props.NasaData.map((item) => {
              return(
                <div className="col">
                  <div className="card" style={ cardStyle }>
                    <img className="card-img-top" src={ item.img_src } alt="Card image cap" style={ cardImageStyle } />
                    <div className="card-body">
                      <h4 className="card-title">{ item.rover.name } Rover</h4>
                      <p className="card-text">Taken by { item.camera.name } Camera on { item.earth_date } rover status: { item.rover.status }</p>
                      <a href="#" className="btn btn-primary">Fly me to the Mars~</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const cardStyle = {
  height: '350px',
  width: '300px',
  margin: '15px'
}

const cardImageStyle = {
  maxHeight: '150px',
  maxWidth: '300px'
}

export default List;
