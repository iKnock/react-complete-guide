import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello this is iknock</h1>
        <p>this is my root Component</p>

        <Person />
        <Person />
        <Person />
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'here i am in another way  '))
  }

}

export default App;
