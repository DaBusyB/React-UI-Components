import React from 'react';
import './Button.css';

const NumberButton = props => {
    
    return (
        <div>
            <button className='numButton'> {props.buttonText} </button>
        </div>
    );
    
}

export default NumberButton;