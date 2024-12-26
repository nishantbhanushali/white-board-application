import React from 'react';

const InputBox = ({ type, placeholder, value, onChange }) => {
  return (
    <div className='mt-[15px]'>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded p-2 items-center w-[300px]"
    />
    </div>
  );
};

export default InputBox;
