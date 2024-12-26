import React from 'react'

const Button = ({label, onSubmit}) => {
  return (
    <div className='text-2xl p-[3px] mt-[15px] font-bold h-[50px] w-[300px] bg-blue-500 text-white flex justify-center'>
        <button onClick={onSubmit}>{label}</button>
        </div>
  )
}

export default Button