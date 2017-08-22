import React, { Component } from 'react';
import axios from 'axios';
import Slideshow from './Slideshow'
import List from './List'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      NasaData: []
    }
  }

  getNasa(event) {
    let self = this
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=nmy857JJ944aJxvHVQPJ6IJ2cMDUUv3761xblGS1')
    .then(resp => {
      let roverPhotos = resp.data.photos
      roverPhotos = roverPhotos.slice(3,24)
      console.log(roverPhotos);
      self.setState({
        NasaData: roverPhotos
      })
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    console.log('hay');
    this.getNasa()
  }

  render() {
    return(
      <div>
        <List NasaData={ this.state.NasaData }></List>
      </div>
    );
  }
}

export default Main
