import React, { useState } from 'react';
import { FcAddImage, FcVideoCall } from 'react-icons/fc';
import { MdOutlineCancel, MdOutlinePeopleAlt } from 'react-icons/md';
import { RiImageAddLine } from 'react-icons/ri';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { apiNewPost } from '@/lib/post/newPost';
import { useDispatch } from 'react-redux';
import { getPostUserAction } from '@/redux/sliceRducer/postSlice';
import { useEffect } from 'react';
import CreatePostModel from './CreatePostModel';
import Model from '../Model';

const CreatePost = ({ user }) => {
    const [isOpenModelPost, setIsOpenModelPost] = useState(false);
    const [titlePost, setTitlePost] = useState('');
    const openModelPost = (item) => setIsOpenModelPost(item);
    return (
        <div className='p-3 bg-[#282828] rounded-lg flex text-white'>
            <div className='w-[10%]'>
                <div className='w-16 h-16 border-[2px] border-[#1a1a1a] rounded-lg'>
                    <img src={user?.avatar} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
            </div>
            <div className='w-[90%]'>
                <div onClick={() => setIsOpenModelPost(true)}>
                    <textarea
                        name=""
                        id=""
                        cols="10"
                        placeholder={`${user?.name} ơi, Bạn đang nghĩ gì thế`}
                        value={titlePost}
                        className='w-full bg-[#1F1F1F] outline-none rounded-lg p-3 text-white cursor-pointer'
                        onChange={(e) => setTitlePost(e.target.value)}
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <button className='flex gap-1 bg-[#1F1F1F] py-1 px-4 rounded-lg'>
                        <FcAddImage size={25} />
                        <span>Photo</span>
                    </button>
                    <button className='flex gap-1 bg-[#1F1F1F] py-1 px-4 rounded-lg'>
                        <FcVideoCall size={25} />
                        <span>Video</span>
                    </button>
                </div>
            </div>
            {isOpenModelPost &&
                <Model title='Tạo bài viết' openModel={openModelPost} >
                    <CreatePostModel user={user} openModel={openModelPost} />
                </Model>
            }

        </div>
    )
}

export default CreatePost
