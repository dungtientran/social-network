import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineDislike, AiOutlineLike, AiOutlineMessage } from 'react-icons/ai';
import moment from 'moment';
import { BsFlag, BsThreeDots } from 'react-icons/bs';
import { BiCommentX } from 'react-icons/bi';

moment.locale('vi');

function PostItemtHead({ post, user, openModel, checkPostHeadIn }) {
    const [isOpenDot, setIsOpenDot] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [isDisLike, setIsDisLike] = useState(false);
    
    const handleLike = () => {
        setIsLike(!isLike);
        setIsDisLike(false);
    }
    const handleDisLike = () => {
        setIsDisLike(!isDisLike);
        setIsLike(false);
    }


    const dotRef = useRef();
    const amountComment = post?.comments.length;

    useEffect(() => {
        let hadleClickOusideDot = (e) => {
            if (!dotRef.current.contains(e.target)) {
                setIsOpenDot(false)
                console.log(1);
            }
        }
        document.addEventListener('mousedown', hadleClickOusideDot)
        return () => { 
            document.removeEventListener('mousedown', hadleClickOusideDot) 
        }

    }, []);

    return (
        <div className='w-full'>
            <div className='flex justify-between items-center w-full' >
                <div className='flex w-[95%] gap-5'>
                    <div title='Xem trang cá nhân' className='w-16 h-16 cursor-pointer'>
                        <img src={user?.avatar} alt="" className='w-16 h-16 object-cover rounded-lg' />
                    </div>
                    <div>
                        <p title='Xem trang cá nhân' className='text-lg font-semibold text-underline'>{user?.name}</p>
                        <p title={moment(post?.createdAt).format('lll')} className='text-[#FFFD01] text-underline'>{moment(post?.createdAt).fromNow()}</p>
                    </div>
                </div>
                <div className='pr-3'>
                    <div className='relative'  ref={dotRef}>
                        <p className='dotSelect ' onClick={() => setIsOpenDot(!isOpenDot)}><BsThreeDots size={20} /></p>
                        <div className={` absolute min-w-[200px] shadow-xl  top-[100%] right-[50%] bg-[#18191A] px-3 py-2 rounded-sm ${isOpenDot ? 'block' : 'hidden'}`}>
                            <div className='absolute  right-0 top-[-10%] w-0 h-0 border-b-[15px] border-b-[#18191A] border-l-[15px] border-l-transparent'></div>
                            <button className='w-full hover:bg-hover-bg px-2 flex items-center py-3 border-b gap-2'> <BsFlag size={20}/> <span>Lưu bài viết</span></button>
                            <button className='w-full hover:bg-hover-bg px-2 flex items-center py-3 border-b gap-2'> <BiCommentX size={20}/> <span>Ẩn bài viết</span></button>
                        </div>
                    </div>
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
                <p className='text-underline'>2 dislike</p>
            </div>
            <div className='flex items-center justify-between px-3  border-t border-gray-500 py-2 '>
                <button onClick={handleLike} className={`flex items-center gap-1 ${isLike && 'text-red-500'}`} title='Like'><AiOutlineLike size={22} /><span>Like</span></button>
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
                <button onClick={handleDisLike} className={`flex items-center gap-1 ${isDisLike && 'text-red-700'}`} title='Như lờ'><AiOutlineDislike size={22} /><span>Dislike</span></button>
            </div>
        </div>
    );
}

export default PostItemtHead
