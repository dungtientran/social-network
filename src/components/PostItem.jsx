
import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import Model from './Model';
import PostComment from './PostComment';
import PostItemtHead from './PostItemtHead';
import { apiPostComment } from '@/lib/post/postComment';
import { getPostUserAction } from '@/redux/sliceRducer/postSlice';
import { useDispatch } from 'react-redux';

const PostItem = ({ post, user }) => {
    // console.log(post);
    const [isOpenModelComment, setIsOpenModelComment] = useState(false);
    // console.log(isOpenModelComment);
    const openModel = (item) => setIsOpenModelComment(item);

    const [comment, setComment] = useState();
    const dispatch = useDispatch();
    const handleComment = async (e) => {
        e.preventDefault();
        const sendCmt = {
            postid: post._id,
            comment,
            usercmt: user,
        }
        const res = await apiPostComment(sendCmt);
        if (res.status === 200) {
            dispatch(getPostUserAction(user.id));
            setComment('')
        }
    }


    return (
        <div className='p-3 bg-[#282828] rounded-lg space-y-3 w-full'>

            <PostItemtHead post={post} user={user} openModel={openModel} checkPostHeadIn={false} />

            {isOpenModelComment && <Model openModel={openModel} title={`Bài viết của ${user?.name}`} >

                <div className='w-full h-full'>
                    <PostItemtHead post={post} user={user} checkPostHeadIn={true} />
                    {post?.comments.length > 0 && (<PostComment comments={post?.comments} user={user} />)}
                </div>
                <div className='flex w-full items-center gap-3 mt-6'>
                    <div className='w-10 h-10 rounded-full'>
                        <img src={user?.avatar} alt="" className='image-circle' />
                    </div>
                    <form onSubmit={handleComment} className='w-full h-full relative'>
                        <input
                            autoFocus
                            type="text"
                            name="comment"
                            className='bg-[#1F1F1F] w-full rounded-xl h-full inline-block outline-none p-3'
                            placeholder='Viết bình luận'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button
                            title='Send'
                            className='text-yl bg-[#1F1F1F] px-3 hover:text-[#2374E1] duration-500 rounded-lg absolute top-[50%] translate-y-[-50%] right-0'
                        >
                            <AiOutlineSend size={25} />
                        </button>
                    </form>

                </div>
            </Model>}
        </div>
    )
}

export default PostItem
