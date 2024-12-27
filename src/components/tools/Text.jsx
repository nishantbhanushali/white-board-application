import React from 'react';
import { VscTextSize } from "react-icons/vsc";

const Text = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center   text-black hover:bg-gray-200"
      onClick={onClick}
    >
      < VscTextSize size={40} />
    </button>
  );
};

export default Text;
