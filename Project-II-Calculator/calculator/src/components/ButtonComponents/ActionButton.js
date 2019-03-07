import React from 'react';

import './Button.css';

const ActionButton = props => {
    return(
        <div className='clearZeroBtn'> 
            <p className='clearZeroBtnTxt'> {props.text} </p>
        </div>
    );
}

export default ActionButton;
