import React from 'react'
import Createroom from '../components/Createroom'
import JoinRoom from '../components/JoinRoom'

const Room = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-around items-center h-screen '>
  <Createroom />
  <JoinRoom />
</div>

 
    </>
  )
}

export default Room