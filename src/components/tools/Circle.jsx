import React from 'react';
import { FaCircle } from "react-icons/fa";

const Circle = ({ onClick }) => {
  return (
    <button
      className="mb-[20px] items-center text-black p-[5px] mt-[15px] rounded hover:bg-gray-200"
      onClick={onClick} 
    >
      <FaCircle size={28} className="text-black" />
    </button>
    
  );
};

export default Circle;
