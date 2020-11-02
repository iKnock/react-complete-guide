import React from 'react'
import './UserOutput.css';

const userOutput = (props) => {

    return (
        <div className='UserOutput'>
            <p>Name: {props.username}</p>
            <p>Size: {props.size}</p>
        </div>
    );
}

export default userOutput;