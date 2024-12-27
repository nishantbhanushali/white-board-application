import React from 'react';
import { RiRectangleFill } from "react-icons/ri";

const Reactangle = ({ onClick }) => {
  return (
    <button
      className="mb-[20px] items-center text-black p-[5px] mt-[15px] rounded hover:bg-gray-200"
      onClick={onClick} 
    >
      <RiRectangleFill size={28} className="text-black" />
    </button>
    
  );
};

export default Reactangle;
