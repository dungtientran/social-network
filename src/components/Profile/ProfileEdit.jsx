import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { BsGenderFemale, BsTelephone } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import Model from '../Model';
import ProfileEditImage from './ProfileEditImage';

const ProfileEdit = ({ user }) => {
    const [isOpenModelAvartar, setIsOpenModelAvatar] = useState(false);
    const [isOpenModelImgBg, setIsOpenModelImgBg] = useState(false);
    const [editProfile, setEditProfile] = useState(false);
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [title, setTitle] = useState();

    const openModelAvatar = () => setIsOpenModelAvatar(false);
    const openModelImageBg = () => setIsOpenModelImgBg(false);

    const profileEdit = { name, gender, phone, address, title };

    const handelSaveEditProfile = () => {
        console.log(profileEdit);
    }

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
                <div className='flex items-center justify-between'>
                    <p className='text-xl p-2' >Thông tin</p>
                    <div >
                        {editProfile ? (
                            <div className='flex gap-4'>
                                <button className='py-1 px-4 rounded-md hover:bg-black-rgba text-[#2374E1]' onClick={() => setEditProfile(false)}>Hủy</button>
                                <button className='py-1 px-4 rounded-md  bg-[#2374E1]' onClick={handelSaveEditProfile}>Lưu</button>
                            </div>
                        ) : (

                            <button className='text-[#3F84D7] py-1 px-3 hover:bg-black rounded-md ' onClick={() => setEditProfile(true)}>Chỉnh sửa</button>
                        )}

                    </div>
                </div>
                <div className=' p-6 w-full'>
                    <div className='space-y-3 mt-3 w-full'>
                        <p
                            className='flex gap-3 items-center text-lg'>
                            <AiOutlineUser size={25} className='text-[#8C939D]' />

                            {editProfile ? (
                                <input type="text" 
                                className='outline-none text-white bg-black px-2 rounded-md' 
                                placeholder='Tên' 
                                onChange={(e) => setName(e.target.value)} autoFocus />
                            ) : (
                                <span>
                                    {user?.name}
                                </span>
                            )}

                        </p>
                        <p
                            className='flex gap-3 items-center text-lg'>
                            <BsGenderFemale size={25} className='text-[#8C939D]' />
                            {editProfile ? (
                                <input
                                    type="text"
                                    className='outline-none text-white bg-black px-2 rounded-md'
                                    placeholder='Giới tính'
                                    onChange={(e) => setGender(e.target.value)}

                                />
                            ) : (
                                <span>
                                    {user?.gender || 'Nam'}
                                </span>
                            )}
                        </p>
                        <p
                            className='flex gap-3 items-center text-lg'>
                            <HiOutlineHome size={25} className='text-[#8C939D]' />
                            {editProfile ? (
                                <input
                                    type="text"
                                    className='outline-none text-white bg-black px-2 rounded-md'
                                    placeholder='Địa chỉ'
                                    onChange={(e) => setAddress(e.target.value)} />
                            ) : (
                                <span>
                                    Sống tại {user?.address}
                                </span>
                            )}
                        </p>

                        <p
                            className='flex gap-3 items-center text-lg'>
                            <BsTelephone size={25} className='text-[#8C939D]' />
                            {editProfile ? (
                                <input
                                    type="text"
                                    className='outline-none text-white bg-black px-2 rounded-md'
                                    placeholder='Số điện thoại'
                                    onChange={(e) => setPhone(e.target.value)} />
                            ) : (
                                <span>
                                    {user?.phone}
                                </span>
                            )}
                        </p>
                        <p
                            className='flex gap-3 items-center text-lg'>
                            <AiOutlineHeart size={25} className='text-[#8C939D]' />
                            {editProfile ? (
                                <input
                                    type="text"
                                    className='outline-none text-white bg-black px-2 rounded-md'
                                    placeholder='Hôn nhân'
                                    onChange={(e) => setTitle(e.target.value)} />
                            ) : (
                                <span>
                                    {user?.title}
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {
                isOpenModelAvartar && (
                    <Model openModel={openModelAvatar} title='Cập nhật ảnh đại diện'>
                        <ProfileEditImage openModel={openModelAvatar} titleChage='avatar' nameInput='avatar' />
                    </Model>
                )
            }
            {
                isOpenModelImgBg && (
                    <Model openModel={openModelImageBg} title='Cập nhật ảnh nền'>
                        <ProfileEditImage openModel={openModelImageBg} titleChage='ảnh nền' nameInput='imageBg' />
                    </Model>
                )
            }
        </div >
    )
}

export default ProfileEdit
