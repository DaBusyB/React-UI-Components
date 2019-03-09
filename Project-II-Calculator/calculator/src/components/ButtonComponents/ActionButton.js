import React from 'react';

import './Button.css';

const ActionButton = props => {
    return(
        
        <button className='clearZeroBtn button'> {props.text} </button>
        
    );
}

export default ActionButton;
