import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const Pencil = ({ onClick }) => {
  return (
    <button
      className="mb-[20px] items-center text-black p-[5px] mt-[15px] rounded hover:bg-gray-200"
      onClick={onClick} // Trigger an action when clicked
    >
      <FaPencilAlt size={28} className="text-black" />
    </button>
  );
};

export default Pencil;
