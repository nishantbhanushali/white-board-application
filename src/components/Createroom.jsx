import React, { useState } from 'react';
import InputBox from './InputBox';
import Button from './Button';
import TopName from './TopName';
import { useNavigate } from 'react-router-dom';

const Createroom = () => {
  const [name, setName] = useState('');
  const [generator, setGenerator] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    setName(e.target.value);
  };

  
  const randomGenerator = () => {
    let result = '';
    const characters =
      '!@#$%^&*()_+}{][ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGenerator(result); 
  };

  const handleSubmit = () => {
    if(!(name && generator)){
        alert('Please fill in all fields');
      
    }else{
        console.log(name, generator); 
        setName('');
        setGenerator(''); 
        navigate("/home" );
    }
   
  };

  const copyToClipboard = () => {
    if (generator) {
      navigator.clipboard.writeText(generator)
        .then(() => {
          alert('Room ID copied to clipboard!');
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center h-[300px] w-[500px] shadow-2xl">
        <TopName name="CREATE ROOM" />
        <div className="mt-[30px] flex flex-col items-center">
          <InputBox
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
          <div className="flex items-center space-x-2 ml-[80px]">
            <InputBox  placeholder="generate"
            value={generator} onChange={() => {}} /> {/* No need for onChange here */}
            <button
              onClick={randomGenerator}
              className="bg-blue-500 text-white p-[5px] mt-[15px] rounded hover:bg-blue-700"
            >
              🔄
            </button>
            <button
              onClick={copyToClipboard}
              className="bg-green-500 text-white p-[5px] mt-[15px] rounded hover:bg-green-700"
            >
            📋
            </button>
          </div>
        </div>
        <Button label="CREATE" onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default Createroom;
