import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'
import Chars from './User/Chars'
import Validation from './User/Validation'

class App extends Component {
  state = {
    name: "",
    size: "zero"
  };

  userNameHandler = (event) => {
    const inputSize = event.target.value.length;
    this.setState({ name: event.target.value, size: inputSize })
  }

  removeChars = (index) => {    
    const text = this.state.name.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    console.log(updatedText)
    this.setState({ name: updatedText })
  }

  render() {

    const showEachChar = this.state.name.split('').map((eachChar, index) => {
      return <Chars chars={eachChar} key={index} removeCharacter={() => this.removeChars(index)} />
    });

    return (
      <div className="App">
        <UserInput readInput={(event) => this.userNameHandler(event)} currentName={this.state.name} />

        <UserOutput username={this.state.name} size={this.state.size} />
        <Validation inputLen={this.state.size} />
        {showEachChar}
      </div>
    );
  }

}

export default App;
