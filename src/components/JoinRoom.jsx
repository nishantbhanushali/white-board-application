import React, { useState } from 'react';
import InputBox from './InputBox';
import Button from './Button';
import TopName from './TopName';
import { useNavigate } from 'react-router-dom';

const JoinRoom = () => {
  const [name, setName] = useState('');
  const [roomid, setRoomid] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleRoomidChange = (e) =>{
    setRoomid(e.target.value);
  }

  const handleSubmit = () =>{
    if(name && roomid){
      navigate(`/home/${roomid}`)
    console.log(name, roomid);
    setRoomid("")
    setName("")
  }else{
    alert("Please fill in both fields");
  }
}

  return (
    <>
  
        
  
    <div className=" flex flex-col items-center  h-[300px] w-[500px] shadow-2xl ">
    <TopName name="JOIN ROOM" />
    <div className='mt-[30px] flex flex-col items-center'>
      <InputBox
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <InputBox 
      
      type="text"
      placeholder="Room id "
      value={roomid}
      onChange={handleRoomidChange}/>

      </div>
      <Button  label="Join" onSubmit={handleSubmit} />
      


    </div>
    </>
  );
};

export default JoinRoom;
