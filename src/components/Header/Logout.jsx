import { getUserProfileAction } from '@/redux/sliceRducer/userSlice';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { MdOutlineNotifications } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Logout = () => {
    const { userProfile } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const router = useRouter();
    const userId = Cookies.get('userId')
    // console.log(userId);
    useEffect(() => {
        if (userId) {
            dispatch(getUserProfileAction(userId))
        }
    }, [userId]);
    // console.log(userProfile);

    const handleLogout = () => {
        Cookies.remove('token');
        router.push('/login')
    }

    return (
        <div className=' flex justify-end'>
            <div className='flex items-center gap-1'>
                <div title='Thông báo' className='mr-6 cursor-pointer'>
                    <MdOutlineNotifications size={26} />
                </div>
                <Link title='Trang cá nhân' href={`/profile/${userId}`} className='inline-block p-1 border border-[#1A1A1A] hover:border-[#FDFD01] rounded-full'>
                    <img
                        src={userProfile?.avatar}
                        alt=""
                        className='w-10 h-10 rounded-full object-cover'
                    />
                </Link>
                <div className='py-1 px-7 bg-box rounded-lg hover:bg-black cursor-pointer'>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Logout