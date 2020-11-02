import React from 'react'

const chars = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div style={style} onClick={props.removeCharacter}>
            {props.chars}
        </div>
    );
}

export default chars;