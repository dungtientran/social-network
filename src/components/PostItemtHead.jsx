import React from 'react'
import { AiOutlineDislike, AiOutlineLike, AiOutlineMessage } from 'react-icons/ai'

const PostItemtHead = ({ post, user, openModel, checkPostHeadIn }) => {
    const amountComment = post?.comments.length;
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex w-[95%] gap-5'>
                    <div title='Xem trang cá nhân' className='w-16 h-16 cursor-pointer'>
                        <img src={user?.avatar} alt="" className='w-16 h-16 object-cover rounded-lg' />
                    </div>
                    <div>
                        <p title='Xem trang cá nhân' className='text-lg font-semibold text-underline'>{user?.name}</p>
                        <p title='1 phút trước' className='text-[#FFFD01] text-underline'>{post.time} 1 phút trước</p>
                    </div>
                </div>
                <div className='w-[5%]'>
                    ...
                </div>
            </div>
            <div>
                {post?.title && (
                    <p className='text-3xl px-2 py-4'>{post?.title}</p>
                )}
                {post?.image && (
                    <div className='py-3 h-[500px] w-full overflow-hidden'>
                        <img src={post?.image} alt="" className='w-full object-cover rounded-lg' />
                    </div>
                )}
            </div>
            <div className='flex items-center justify-between px-3 text-xs'>
                <p className='text-underline'>23 like</p>
                <p className='text-underline'>2 đéo thích</p>
            </div>
            <div className='flex items-center justify-between px-3  border-b border-gray-500 py-2 '>
                <button className='flex items-center  hover:text-red-500 gap-1' title='Like'><AiOutlineLike size={22} /><span>Like</span></button>
                {checkPostHeadIn ? (
                    <button
                        className='flex items-center hover:text-yellow-500 gap-1' title='Gửi tin nhắn'><AiOutlineMessage size={22}
                        />
                        {amountComment} Bình luận
                    </button>
                ) : (
                    <button
                        onClick={() => openModel(true)}
                        className='flex items-center hover:text-yellow-500 gap-1' title='Gửi tin nhắn'><AiOutlineMessage size={22}
                        />
                        {amountComment} Bình luận
                    </button>
                )}
                <button className='flex items-center hover:text-yellow-500 gap-1' title='Như lờ'><AiOutlineDislike size={22} /><span>Như lờ</span></button>
            </div>
        </div>
    )
}

export default PostItemtHead
