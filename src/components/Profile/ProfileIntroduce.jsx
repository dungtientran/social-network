import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import {HiOutlineHome} from 'react-icons/hi'
import { MdOutlineSubtitles } from 'react-icons/md';

const ProfileIntroduce = ({user}) => {
    console.log(user);
    return (
        <div className='p-4'>
            <div className='px-4 '>
                <h1 className='text-2xl font-semibold'>Giới thiệu</h1>
            </div>
            <div className='space-y-3 mt-3'>
                <p className='flex gap-3 items-center text-lg'><HiOutlineHome size={25} className='text-[#8C939D]'/> <span> Sống tại { user?.address || 'HN'}</span></p>
                <p className='flex gap-3 items-center text-lg'><BsTelephone  size={25} className='text-[#8C939D]'/> <span>{user?.phone}</span></p>
                <p className='flex gap-3 items-center text-lg'><MdOutlineSubtitles size={25} className='text-[#8C939D]'/> <span>{user?.title}</span></p>
            </div>
        </div>
    )
}

export default ProfileIntroduce