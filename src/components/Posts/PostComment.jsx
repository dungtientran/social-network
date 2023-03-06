import React, { useState } from 'react';



const PostComment = ({ comments, user }) => {
    
    return (
        <div className='p-3 w-full'>
            <div className='bg-[#1F1F1F] p-3 py-4 rounded-md flex flex-col gap-3 w-full'>
                {comments?.map((item, index) => (
                    <div key={index} className='flex gap-3'>
                        <div title='Xem tranng cá nhân' className='w-10 h-10 rounded-lg cursor-pointer'>
                            <img src={item?.usercmt.avatar} alt="" className='image-circle' />
                        </div>
                        <div className=' text-sm'>
                            <div className='bg-[#3A3B3C] rounded-lg py-1 '>
                            <p title='Xem trang cá nhân' className='px-3 text-underline font-semibold'>{item?.usercmt.name}</p>
                            <p className='px-6'>{item?.comment}</p>
                            </div>
                            <p title='1 phút trước' className='px-1 text-[10px] text-underline'>1 phút</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostComment
