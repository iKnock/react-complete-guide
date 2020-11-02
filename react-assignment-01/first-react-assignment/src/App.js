import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  state = {
    name: "iknock",
    size: "zero"
  };

  userNameHandler = (event) => {
    const inputSize = event.target.value.length;
    console.log('event handler called= ' + inputSize)
    this.setState({ size: inputSize })
  }

  render() {
    return (
      <div className="App">
        <UserInput readInput={(event) => this.userNameHandler(event)} currentName={this.state.name} />
        <UserOutput username={this.state.name} size={this.state.size} />
      </div>
    );
  }

}

export default App;
