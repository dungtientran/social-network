import React from 'react';
import {FcAddImage, FcVideoCall} from 'react-icons/fc';

const CreatePost = ({ user }) => {
    return (
        <div className='p-3 bg-[#282828] rounded-lg flex text-white'>
            <div className='w-[10%]'>
                <div className='w-16 h-16 border-[2px] border-[#1a1a1a] rounded-lg'>
                    <img src={user?.avatar} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
            </div>
            <div className='w-[90%]'>
                <div>
                    <textarea name="" id="" cols="10" placeholder={`${user.name} ơi, Bạn đang nghĩ gì thế`} 
                    className='w-full bg-[#1F1F1F] outline-none rounded-lg p-3 text-white cursor-pointer'></textarea>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='flex gap-1 bg-[#1F1F1F] py-1 px-4 rounded-lg'>
                        <FcAddImage size={25}/>
                        <span>Photo</span>
                    </button>
                    <button className='flex gap-1 bg-[#1F1F1F] py-1 px-4 rounded-lg'>
                        <FcVideoCall size={25}/>
                        <span>Video</span>
                    </button>
                </div>
            </div>
            <div className='bg-black fixed top-0 left-0 w-full h-full z-20'>

            </div>
        </div>
    )
}

export default CreatePost
