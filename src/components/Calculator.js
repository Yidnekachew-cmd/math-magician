import { useState } from 'react';
import Keypads from './Keypads';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleButtonClick = (e) => {
    const targetText = e.target.textContent;
    const newState = calculate(state, targetText);
    setState(newState);
  };
  return (
    <div>

      <Keypads handleClick={handleButtonClick} state={state} />
    </div>
  );
};
export default Calculator;
