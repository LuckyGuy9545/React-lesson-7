import { useState } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

export default function ColorPicker({ options }) {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);

  const makeOptionClassName = index => {
    //--3. как меняет жизнь classnames
    return classNames(
      'ColorPicker__option',
      // 'через запятую любой клас можно вписать',
      // 'сколько хочешь',
      {
        //*а тут тот класс, который доставится при условии
        'ColorPicker__option--active': index === activeOptionIndex,
      }
    );
  };

  const { label } = options[activeOptionIndex];

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      {/* //*добавляем index, чтобы могли знать какой из обьектов масива ColorPicker === индексу в static */}
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            //*ВАЖНО передать инлайн функцию, а не сам вызов функции this.setActiveIndex(index) (иначе будет undefined)
            onClick={() => setActiveOptionIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
