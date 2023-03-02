import React from 'react'
import { AiOutlineDislike, AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import moment from 'moment';
import { BsThreeDots } from 'react-icons/bs';
moment.locale('vi');

function PostItemtHead({ post, user, openModel, checkPostHeadIn }) {
    const amountComment = post?.comments.length;
    // console.log(post);
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center w-full'>
                <div className='flex w-[95%] gap-5'>
                    <div title='Xem trang cá nhân' className='w-16 h-16 cursor-pointer'>
                        <img src={user?.avatar} alt="" className='w-16 h-16 object-cover rounded-lg' />
                    </div>
                    <div>
                        <p title='Xem trang cá nhân' className='text-lg font-semibold text-underline'>{user?.name}</p>
                        <p title={moment(post?.createdAt).format('lll')} className='text-[#FFFD01] text-underline'>{moment(post?.createdAt).fromNow()}</p>
                    </div>
                </div>
                <div className='w-[5%]'>
                    <BsThreeDots />
                </div>
            </div>
            <div>
                {post?.title && (
                    <p className='text-3xl px-2 py-4'>{post?.title}</p>
                )}
                {post?.images && (
                    <div className='py-3 px-4 flex gap-2'>
                        {post?.images?.map((item, index) => (
                            <div key={index} className='rounded-r-md'>
                                <img src={item} alt="" className='object-cover rounded-md w-full h-full' />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='flex items-center justify-between px-3 text-xs mt-1 mb-2'>
                <p className='text-underline'>23 like</p>
                <p className='text-underline'>2 đéo thích</p>
            </div>
            <div className='flex items-center justify-between px-3  border-t border-gray-500 py-2 '>
                <button className='flex items-center  hover:text-red-500 gap-1' title='Like'><AiOutlineLike size={22} /><span>Like</span></button>
                {checkPostHeadIn ? (
                    <button
                        className='flex items-center hover:text-yellow-500 gap-1' title='Gửi tin nhắn'><AiOutlineMessage size={22} />
                        {amountComment} Bình luận
                    </button>
                ) : (
                    <button
                        onClick={() => openModel(true)}
                        className='flex items-center hover:text-yellow-500 gap-1' title='Gửi tin nhắn'><AiOutlineMessage size={22} />
                        {amountComment} Bình luận
                    </button>
                )}
                <button className='flex items-center hover:text-yellow-500 gap-1' title='Như lờ'><AiOutlineDislike size={22} /><span>Như lờ</span></button>
            </div>
        </div>
    );
}

export default PostItemtHead
