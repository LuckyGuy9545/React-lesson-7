//* использование хука useLocalStorage вместо (1)
import { useState, useEffect } from 'react';

//* чтобы при загрузке не было пустой строки, прописываем условие в useState
export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    //-- ?? - аналог || (или) только лучше
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  //* 2. вовзращаем масив, чтобы его можно было использовать вне этой переменной
  return [state, setState];
}
