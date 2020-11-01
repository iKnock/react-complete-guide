import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Im {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;
