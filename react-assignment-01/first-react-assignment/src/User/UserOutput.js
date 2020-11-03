import React from 'react'
import './UserOutput.css';

const userOutput = (props) => {

    return (
        <div className='UserOutput'>
            <p>Name: {props.username}</p>
            <p>this is the second sentence</p>
        </div>
    );
}

export default userOutput;