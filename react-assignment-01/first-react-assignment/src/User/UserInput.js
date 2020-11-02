import React from 'react'


const userInput = (props) => {

    const style = {
        font: 'inherit',
        margin: '2px',
        border: '1px solid green',
        padding: '8px',
        cursor: 'pointer'
      };  

    return (
        <div className='UserInput'>
            <input style={style} onChange={props.readInput} type='text' value={props.currentName} />
        </div>
    );
}

export default userInput;