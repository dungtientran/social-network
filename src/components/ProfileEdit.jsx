import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import Model from './Model';
import { BsCardImage } from 'react-icons/bs';
import ProfileEditAvatar from './ProfileEditAvatar';

const ProfileEdit = ({ user }) => {
    const [isOpenModelAvartar, setIsOpenModelAvatar] = useState(false);
    const openModel = () => setIsOpenModelAvatar(false)
    return (
        <div className='w-full'>
            {/* avatar */}
            <div className=' p-3 '>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-xl p-2' >Ảnh đại diện</p>
                    </div>
                    <div >
                        <button className='text-[#3F84D7] py-1 px-3 hover:bg-black rounded-md ' onClick={() => setIsOpenModelAvatar(true)}>Chỉnh sửa</button>
                    </div>
                </div>
                <div className='flex items-center justify-center p-6'>
                    <div className='w-[200px] h-[200px] rounded-full'>
                        <img src={user?.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                    </div>
                </div>
            </div>

            {/* imgBg */}
            <div className=' p-3 '>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-xl p-2' >Ảnh nền</p>
                    </div>
                    <div >
                        <label htmlFor="imageBg"
                            className='w-full flex gap-2 items-center p-1 justify-center text-sm bg-[#323436] cursor-pointer hover:bg-black rounded-lg'>
                            <FiUpload size={28} />
                            <span className='text-lg'>Đổi ảnh nền</span>
                            <input type="file" id='imageBg' name='imageBg' hidden />
                        </label>
                    </div>
                </div>
                <div className='flex items-center justify-center p-6'>
                    <div className='w-[400px] h-[300px] rounded-full'>
                        <img src={user?.imageBg} alt="" className='w-full h-full object-cover rounded-lg' />
                    </div>
                </div>
            </div>

            {/* Giới thiệu */}

            <div>

            </div>

            {isOpenModelAvartar && (
                <Model openModel={openModel} title='Cập nhật ảnh đại diện'>
                  <ProfileEditAvatar openModel={openModel}/>
                </Model>
            )}
        </div>
    )
}

export default ProfileEdit
