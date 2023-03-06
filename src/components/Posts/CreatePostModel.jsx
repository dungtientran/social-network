import React, { useState } from 'react'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { RiImageAddLine } from 'react-icons/ri'
import { apiNewPost } from '@/lib/post/newPost';
import { useDispatch } from 'react-redux';
import { getPostUserAction } from '@/redux/sliceRducer/postSlice';
import { uploadImage } from '@/lib/uploadImageVideo/upload';


const CreatePostModel = ({ user, openModel }) => {
    const [titlePost, setTitlePost] = useState('');
    const [images, setImages] = useState();

    const dispatch = useDispatch();

    const handleOnChangeImage = async (e) => {
        const files = [...e.target.files];
        const imageArr = await uploadImage(files);
        setImages(imageArr)
    };


    const handleCreatePost = async (e) => {
        e.preventDefault();

        const newPost = await apiNewPost({ title: titlePost, images: images })
        if (newPost.status === 200) {
            openModel(false)
            dispatch(getPostUserAction(user?.id))
            setTitlePost('')
        }
    }


    return (
        <form onSubmit={handleCreatePost} className='p-3 w-full'>
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
                <div className='border rounded-lg mt-2 p-2'>
                    {images ?
                        <div className='flex flex-wrap gap-1 justify-center'>
                            {images?.map((item, index) => (
                                <div key={index} className='w-[20%]'>
                                    <img src={item} alt="" className='w-full h-full object-cover' />
                                </div>
                            ))}
                        </div>
                        : (
                            <div className=' flex h-[200px] justify-between rounded-lg'>
                                <label htmlFor="image" className='w-[48%] flex flex-col gap-2 items-center justify-center text-sm bg-[#323436] cursor-pointer hover:bg-black rounded-lg'>
                                    <RiImageAddLine size={30} />
                                    <span>Thêm ảnh</span>
                                </label>
                                <input type="file" id='image' name='image' onChange={handleOnChangeImage} multiple hidden />
                                <label htmlFor="video" className='w-[48%] flex flex-col gap-2 items-center justify-center text-sm bg-[#323436] cursor-pointer hover:bg-black rounded-lg'>
                                    <AiOutlineVideoCameraAdd size={30} />
                                    <span>Thêm video</span>
                                </label>
                                <input type="file" id='video' name='video' hidden />
                            </div>
                        )}
                </div>
                <div className='mt-4'>
                    <button className='w-full text-center py-2 bg-[#FFFD01] text-black uppercase font-semibold rounded-lg'>Đăng</button>
                </div>
            </div>
        </form>
    )
}

export default CreatePostModel
