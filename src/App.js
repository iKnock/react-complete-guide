import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'henok', age: '33' },
      { name: 'iknock', age: '40' },
      { name: 'ire', age: '22' },,
    ],
    otherStates : 'some values'
  } //this state is a reserved property only works on components that extends react Component

  switchNameHandler = () => {
    console.log('clicked!')
    this.setState({
      persons: [
        { name: 'yaaa', age: '10' },
        { name: 'sss', age: '40' },
        { name: 'dom', age: '22' },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello this is iknock</h1>
        <p>this is my root Component</p>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} ></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null,'here i am in another way  '))
  }

}

export default App;
