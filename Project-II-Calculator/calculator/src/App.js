import React from 'react';

import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = props => {
  return (
    <div className='calcContainer'>
      <CalculatorDisplay />
      <ActionButton text='clear'/>



      <ActionButton text='0'/>

    </div>
  );
};

export default App;
