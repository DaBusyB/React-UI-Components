import React from 'react';

import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from '../src/components/CardComponents/CardContainer';
import Footer from '../src/components/FooterComponents/Footer';

const App = () => {
  return (
    <div className='appContainer'>
      <div>
        <HeaderContainer />
      </div>

      <div>
        <CardContainer />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default App;
