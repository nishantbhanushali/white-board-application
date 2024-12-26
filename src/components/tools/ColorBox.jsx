import React, { useState } from 'react';

const ColorBox = ({ onColorChange }) => {
  const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF'];

  return (
    <div className="flex gap-2 mt-[20px]">
      {colors.map((color) => (
        <button
          key={color}
          className="w-8 h-8 rounded-full"
          style={{ backgroundColor: color, border: color === '#FFFFFF' ? '1px solid #000' : 'none' }}
          onClick={() => onColorChange(color)}
        ></button>
      ))}
    </div>
  );
};

export default ColorBox;
