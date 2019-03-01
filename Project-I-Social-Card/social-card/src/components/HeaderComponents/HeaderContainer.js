import React from 'react';

import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import CardContainer from '../CardComponents/CardContainer';
import Footer from '../FooterComponents/Footer';

const HeaderContainer = () => {
    return (
        <div className='headerContainer'>
            <div>
                <ImageThumbnail />
                <HeaderContent />
            </div>

            <div>
                <CardContainer />
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
}

export default HeaderContainer;
