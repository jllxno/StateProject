import React from 'react';

export const ColorButton = ({ changeColor }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};
