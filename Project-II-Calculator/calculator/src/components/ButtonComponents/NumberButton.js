import React from 'react';

import './Button.css';

const NumberButton = props => {
    
    return (
        <div>
            <button className={`${props.buttonStyle}`}> {props.buttonText} </button>
        </div>
    );
    
}

export default NumberButton;