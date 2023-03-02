import React, { useState } from 'react';
import Model from './Model';
import ProfileEditImage from './ProfileEditImage';

const ProfileEdit = ({ user }) => {
    const [isOpenModelAvartar, setIsOpenModelAvatar] = useState(false);
    const [isOpenModelImgBg, setIsOpenModelImgBg] = useState(false);
    const openModelAvatar = () => setIsOpenModelAvatar(false);
    const openModelImageBg = () => setIsOpenModelImgBg(false);
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
                        {/* <label htmlFor="imageBg"
                            className='w-full flex gap-2 items-center p-1 justify-center text-sm bg-[#323436] cursor-pointer hover:bg-black rounded-lg'>
                            <FiUpload size={28} />
                            <span className='text-lg'>Đổi ảnh nền</span>
                            <input type="file" id='imageBg' name='imageBg' hidden />
                        </label> */}
                        <button className='text-[#3F84D7] py-1 px-3 hover:bg-black rounded-md ' onClick={() => setIsOpenModelImgBg(true)}>Chỉnh sửa</button>

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
                <Model openModel={openModelAvatar} title='Cập nhật ảnh đại diện'>
                    <ProfileEditImage openModel={openModelAvatar} titleChage = 'avatar' nameInput='avatar'/>
                </Model>
            )}
            {isOpenModelImgBg && (
                <Model openModel={openModelImageBg} title='Cập nhật ảnh nền'>
                    <ProfileEditImage openModel={openModelImageBg} titleChage = 'ảnh nền' nameInput='imageBg'/>
                </Model>
            )}
        </div>
    )
}

export default ProfileEdit
