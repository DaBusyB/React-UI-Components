import React from 'react';

import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import ArithmeticButton from './components/ButtonComponents/ArithmeticButton';

const App = props => {
  return (
    <div className='calcContainer'>
      <CalculatorDisplay />

      <div className='actionRow'> 
        <ActionButton text='clear' />
        <ArithmeticButton buttonText='/' />
      </div>

      <table>
        <tr>
          <td><NumberButton buttonText={7} /></td>
          <td><NumberButton buttonText={8} /></td>
          <td><NumberButton buttonText={9} /></td>
          <td><ArithmeticButton buttonText='x' /></td>
        </tr>

        <tr>
          <td><NumberButton buttonText={4} /></td>
          <td><NumberButton buttonText={5} /></td>
          <td><NumberButton buttonText={6} /></td>
          <td><ArithmeticButton buttonText='-' /></td>
        </tr>

        <tr>
          <td><NumberButton buttonText={1} /></td>
          <td><NumberButton buttonText={2} /></td>
          <td><NumberButton buttonText={3} /></td>
          <td><ArithmeticButton buttonText='+' /></td>
        </tr>
      </table>

      <div className='actionRow'> 
        <ActionButton text={0} />
        <ArithmeticButton buttonText='=' />
      </div>

    </div>
  );
};

export default App;
