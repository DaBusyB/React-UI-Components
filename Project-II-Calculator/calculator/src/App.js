import React from 'react';

import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = props => {
  return (
    <div className='calcContainer'>
      <CalculatorDisplay />
      <ActionButton text='clear'/>

      <table>
        <tr>
          <td><NumberButton buttonText={7} /></td>
          <td><NumberButton buttonText={8} /></td>
          <td><NumberButton buttonText={8} /></td>
        </tr>

        <tr>
          <td><NumberButton buttonText={4} /></td>
          <td><NumberButton buttonText={5} /></td>
          <td><NumberButton buttonText={6} /></td>
        </tr>

        <tr>
          <td><NumberButton buttonText={1} /></td>
          <td><NumberButton buttonText={2} /></td>
          <td><NumberButton buttonText={3} /></td>
        </tr>
      </table>

      <ActionButton text={0}/>

    </div>
  );
};

export default App;
