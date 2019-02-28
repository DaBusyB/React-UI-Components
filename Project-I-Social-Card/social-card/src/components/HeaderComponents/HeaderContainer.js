import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className='headerContainer'>
            <ImageThumbnail className='thumbnail'/>
            <HeaderContent className='headerContent' />
        </div>
    );
}

export default HeaderContainer;
