import React, { Component } from 'react';
import './App.css';
import People from './People.js';
import Films from './Films.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Famous Ghibli People</h1>
        </header>
        <People />
        <Films />
      </div>
    );
  }
}

export default App;
