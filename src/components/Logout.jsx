import Link from 'next/link';
import React from 'react';
import { MdOutlineNotifications } from 'react-icons/md';
import { IoIosArrowDropdown } from 'react-icons/io';

const Logout = ({ user }) => {
    return (
        <div className='p-3 mt-4 flex justify-end'>
            <div className='flex items-center gap-1'>
                <div className='mr-6'>
                    <MdOutlineNotifications size={26} />
                </div>
                <Link href="/profile" className='inline-block p-1 border border-[#1A1A1A] hover:border-[#FDFD01] rounded-full'>
                    <img
                        src={user.avatar}
                        alt=""
                        className='w-12 h-12 rounded-full object-cover'
                    />
                </Link>
                <div className='py-1 px-7 bg-box rounded-lg hover:bg-black cursor-pointer'>
                    {/* <IoIosArrowDropdown size={25} className='text-[#FFFD01]' /> */}
                    <button>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Logout