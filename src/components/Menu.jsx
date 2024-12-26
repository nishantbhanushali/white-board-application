import React from 'react';

const Menu = ({ strokeColor, handleStrokeColorChange }) => {
  const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'brown'];

  const handleColorClick = (color) => {
    handleStrokeColorChange(color); // Pass selected color to parent
  };

  return (
    <>
      <div className="shadow-xl border rounded-[10px] w-[225px] flex gap-2 h-[50px] items-center">
        {colors.map((color) => (
          <button
            key={color}
            className='h-[30px] w-[30px] rounded-full'
            style={{
              backgroundColor: color,
              border: strokeColor === color ? '3px solid black' : 'none', // Add border if selected
            }}
            onClick={() => handleColorClick(color)} // Set color when clicked
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
