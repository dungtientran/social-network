import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const MesengerInput = () => {
  return (
    <div className='w-full flex items-center justify-between px-6 mb-4'>
        <input type="text" className='bg-[#1F1F1F] w-[80%] outline-none p-1' placeholder='Nói gì đê' />
        <button><AiOutlineSend size={25} /></button>
      </div>
  )
}

export default MesengerInput
