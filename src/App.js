import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = (props) => {

  const [personsState, setPersonsState] = useState({//useState is the key work used for the react hook to manage state in function based components
    persons: [
      { name: 'henok', age: '33' },
      { name: 'iknock', age: '40' },
      { name: 'ire', age: '22' },
    ]
  });

  const [otherState] = useState('some hello other state')

  console.log(personsState, otherState)

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: '10' },
        { name: 'sss', age: '40' },
        { name: 'dom', age: '22' },
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hello this is iknock</h1>
      <p>this is my root Component</p>

      <button onClick={() => switchNameHandler('Henokkkkk')}>Switch Name</button>

      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age} 
        click={switchNameHandler.bind(this, 'Max')}></Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
}

export default App;