import React from 'react';
import './Button.css';

const ArithmeticButton = props => {
    
    return (
        <div>
            <button className='arithButton button'> {props.buttonText} </button>
        </div>
    );
    
}

export default ArithmeticButton;