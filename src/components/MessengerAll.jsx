import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const MessengerAll = () => {
    return (
        <div className='rounded-[5%] bg-[#282828] h-[450px] mt-4 p-3 relative'>
            <div className='py-2'>
                <p>Chat tổng</p>
            </div>
            <div className='h-[80%] px-3 bg-[#1f1f1f] rounded-lg'>
                Nội dung chat
            </div>
            <div className='absolute bottom-0 left-0 w-full flex items-center justify-between px-6 mb-4'>
                <input type="text" className='bg-[#1F1F1F] w-[80%] outline-none p-1' placeholder='Nói gì đê' />
                <button><AiOutlineSend size={25} /></button>
            </div>
        </div>
    )
}

export default MessengerAll
