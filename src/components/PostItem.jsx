import { apiPostComment } from '@/lib/post/postComment';
import { getPostUserAction } from '@/redux/sliceRducer/postSlice';
import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineDislike, AiOutlineMessage } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

const PostItem = ({ post, user }) => {
    // console.log(post._id);
    const [comment, setComment] = useState();
    const dispatch = useDispatch();
    // console.log(post.comments);
    const handleComment = async () => {
        const sendCmt = {
            postid: post._id,
            comment,
            usercmt: user,
        }
        const res = await apiPostComment(sendCmt);
        console.log(res);
        if (res.status === 200) {
            dispatch(getPostUserAction(user.id));
        }
    }

    return (
        <div className='p-3 bg-[#282828] rounded-lg space-y-3 w-full'>
            <div className='flex justify-between items-center'>
                <div className='flex w-[95%] gap-5'>
                    <div className='w-16 h-16'>
                        <img src={user?.avatar} alt="" className='w-16 h-16 object-cover rounded-lg' />
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>{user?.name}</p>
                        <p className='text-[#FFFD01]'>{post.time} 1 phút trước</p>
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
            <div className='flex items-center justify-around px-3 border-t border-b border-gray-500 py-2 '>
                <button className='flex items-center hover:text-red-500 gap-1' title='Like'><AiOutlineLike size={30} /><span>Thích</span></button>
                <button className='flex items-center hover:text-yellow-500 gap-1' title='Gửi tin nhắn'><AiOutlineMessage size={30} /><span>Gửi tin nhắn</span></button>
                <button className='flex items-center hover:text-yellow-500 gap-1' title='Như lờ'><AiOutlineDislike size={30} /><span>Dislike</span></button>
            </div>
            <div className='bg-[#1F1F1F] px-3 py-4 rounded-md flex flex-col gap-3'>
                {post?.comments?.map((item, index) => (
                    <div className='flex gap-4' key={index}>
                        <div className='w-10 h-10 rounded-full'>
                            <img src={item?.usercmt?.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className='bg-box px-3 py-1 rounded-lg'>
                            <p className='font-semibold'>{item?.usercmt?.name}</p>
                            <p className='my-2 ml-2'>{item?.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-2'>
                <div className='w-[10%'>
                    <div className='w-12 h-12 border-[2px] border-[#1a1a1a] rounded-lg'>
                        <img src={user?.avatar} alt="" className='w-full h-full object-cover rounded-lg' />
                    </div>
                </div>
                <div className='w-[90%] flex items-center gap-2'>
                    <input onChange={(e) => setComment(e.target.value)} type="text" className='w-full bg-[#1F1F1F] outline-none rounded-lg p-3 text-white placeholder:text-gray-400' placeholder='Chửi chết mẹ nó đê' />
                    <button onClick={handleComment} className='p-2'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default PostItem
