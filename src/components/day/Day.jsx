import React from 'react';
import './day.css';

export const Day = ({ value, classes, empty, handleClick }) => {
  return (
    empty ?
      (
        <span className="day empty"/>
      ) : (
        <button
          onClick={() => handleClick()}
          className={`day ${Object.keys(classes).join(' ')}`}
        >
          {value}
        </button>
      )
  );
};
