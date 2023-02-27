import React from 'react';
import { AiOutlineLike, AiOutlineDislike, AiOutlineMessage } from 'react-icons/ai';

const PostItem = ({ post }) => {
    return (
        <div className='p-3 bg-[#282828] rounded-lg space-y-3'>
            <div className='flex justify-between items-center'>
                <div className='flex w-[95%]'>
                    <div className='w-[8%] h-16'>
                        <img src={post.avatar} alt="" className='w-16 h-16 object-cover rounded-lg' />
                    </div>
                    <div>
                        <p className=''>{post.name}</p>
                        <p className='text-[#FFFD01]'>{post.time}</p>
                    </div>
                </div>
                <div className='w-[5%]'>
                    ...
                </div>
            </div>
            <div>
                <p>{post.title}</p>
                <div className='py-3 h-[500px] w-full overflow-hidden'>
                    <img src={post.img} alt="" className='w-full object-cover rounded-lg' />
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <button title='Like'><AiOutlineLike size={30} /></button>
                <button title='Gửi tin nhắn'><AiOutlineMessage size={30} /></button>
                <button title='Như lờ'><AiOutlineDislike size={30} /></button>
            </div>
            <div className='flex'>
                <div className='w-[10%]'>
                    <div className='w-16 h-16 border-[2px] border-[#1a1a1a] rounded-lg'>
                        <img src={post?.avatar} alt="" className='w-full h-full object-cover rounded-lg' />
                    </div>
                </div>
                <div className='w-[90%]'>
                    <input type="text" className='w-full bg-[#1F1F1F] outline-none rounded-lg p-3 text-white placeholder:text-gray-400' placeholder='Chửi chết mẹ nó đê' />
                </div>
            </div>
        </div>
    )
}

export default PostItem
