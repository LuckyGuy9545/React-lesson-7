import { useState, useEffect } from 'react';
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
  //*всегда анонимкка сначала, а в нее можно вкладывать все что угодно
  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Total ${totalClicks}`;
  }, [counterA, counterB]);

  return (
    <div className="counter__controls">
      {/* <p>{totalClicks}</p> */}
      <button type="button" onClick={handeCounterAIncrement}>
        Кликнули на counterA {counterA} раз
      </button>
      <button type="button" onClick={handeCounterBIncrement}>
        Кликнули на counterB {counterB} раз
      </button>
    </div>
  );
}
