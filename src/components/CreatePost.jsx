import React, { useState } from 'react';
import { FcAddImage, FcVideoCall } from 'react-icons/fc';
import { MdOutlineCancel, MdOutlinePeopleAlt } from 'react-icons/md';
import { RiImageAddLine } from 'react-icons/ri';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';

const CreatePost = ({ user }) => {
    const [isOpenModelPost, setIsOpenModelPost] = useState(false);
    const [titlePost, setTitlePost] = useState('')

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

            {/* Model post */}

            {isOpenModelPost && (
                <div className='bg-black-rgba fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center'>
                    <div className='box p-3 w-[40%] m-auto'>
                        <div className='text-center py-4 border-b-[1px] border-gray-300'>
                            <span className='text-xl'>Tạo bài viết</span>
                            <span
                                className='float-right text-gray-500 hover:text-white cursor-pointer'
                                onClick={() => setIsOpenModelPost(false)}
                            >
                                <MdOutlineCancel size={30} />
                            </span>
                        </div>
                        <div className='p-3'>
                            <div className='flex items-center gap-3'>
                                <div className='w-12 h-12 border-[2px] rounded-full'>
                                    <img src={user?.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                                </div>
                                <div className='space-y-1'>
                                    <p className='font-semibold ml-2'>{user?.name}</p>
                                    <div className='flex items-center gap-1 bg-[#1F1F1F] py-1 px-3 rounded-xl'>
                                        <MdOutlinePeopleAlt />
                                        <p>Bạn bè</p>
                                    </div>
                                </div>
                            </div>
                            <div className='py-2'>
                                <div>
                                    <input 
                                    type="text" 
                                    autoFocus={true} 
                                    placeholder={`${user?.name} ơi, Bạn đang nghĩ gì thế?`} 
                                    className='box w-full py-3 outline-none'
                                    value={titlePost}
                                    onChange={(e) => setTitlePost(e.target.value)}
                                     />
                                </div>
                                <div className='border rounded-lg h-[200px] mt-2 p-2'>
                                    <div className=' flex justify-between h-full rounded-lg'>
                                        <label htmlFor="image" className='w-[48%] flex flex-col gap-2 items-center justify-center text-sm bg-[#323436] cursor-pointer hover:bg-black rounded-lg'>
                                            <RiImageAddLine size={30} />
                                            <span>Thêm ảnh</span>
                                        </label>
                                        <input type="file" id='image' name='image' hidden />
                                        <label htmlFor="video" className='w-[48%] flex flex-col gap-2 items-center justify-center text-sm bg-[#323436] cursor-pointer hover:bg-black rounded-lg'>
                                            <AiOutlineVideoCameraAdd size={30} />
                                            <span>Thêm video</span>
                                        </label>
                                        <input type="file" id='video' name='video' hidden />
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <button className='w-full text-center py-2 bg-[#FFFD01] text-black uppercase font-semibold rounded-lg'>Đăng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreatePost
