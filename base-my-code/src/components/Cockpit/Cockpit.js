import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('<Cockpit.js> useEffect');
    //Http request ...
    // setTimeout(() => {
    //  alert('Saved data to cloud')
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('<Cockpit.js> clean up work in useEffect');//executed BEFORE the main useEffect function runs, but AFTER the (first) render cycle!
    };
  }, []);

  //add this [props.persons] to call useEffect only when persons is changed
  // add empity array [] as second param of useEffect to call when the component render only the 
  //first time

  useEffect(() => {
    console.log('<Cockpit.js> useEffect 2nd');

    return () => {
      console.log('<Cockpit.js> clean up work in 2nd useEffect');//executed BEFORE the main useEffect function runs, but AFTER the (first) render cycle!
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
      
        
          <button onClick={authContext.login}>Log In</button>
        
      
    </div>
  );
};

export default React.memo(Cockpit);