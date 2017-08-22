import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container">
          <Main></Main>
        </div>
      </div>
    );
  }
}

export default App;
