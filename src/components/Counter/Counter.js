import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [counterA, setcounterA] = useState(0);
  const [counterB, setcounterB] = useState(0);

  const handeCounterAIncrement = () => {
    setcounterA(prevState => prevState + 1);
  };

  const handeCounterBIncrement = () => {
    setcounterB(prevState => prevState + 1);
  };

  return (
    <div className="counter__controls">
      <button type="button" onClick={handeCounterAIncrement}>
        Кликнули на counterA {counterA} раз
      </button>
      <button type="button" onClick={handeCounterBIncrement}>
        Кликнули на counterB {counterB} раз
      </button>
    </div>
  );
}
