import { useState, useEffect, useRef } from 'react';
import './Clock.css';

export default function Clock() {
  //== для чего делаем анонимку (() => new Date())
  //* эта функция вызовется 1 раз и то что она вернет будет изначальным значением
  //* если без анонимки, то будет каждый раз вызываться функция
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Clock ' + new Date());
      setTime(new Date());
    }, 1000);

    //*закрываем(очищаем) функцию, чтобы не засоряла память (если перейдем на другую страницу)
    return () => {
      console.log('функция очистки перед следующим вызовом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
    clearInterval(intervalId.current);
  };
  return (
    <div>
      <p>Current time: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
}
