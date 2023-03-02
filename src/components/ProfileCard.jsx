import Link from 'next/link'
import React from 'react'

const ProfileCard = ({ user }) => {
  return (
    <div className='rounded-[5%] bg-[#282828] h-[400px] relative'>
      <div className='h-[30%] bg-black'>
        <img
          src={user?.imageBg}
          className='object-cover w-full h-full rounded-t-[5%]'
          alt=""
        />
      </div>
      <div className='relative flex justify-between items-center px-4'>
        <div className='w-[30%] profile-item py-2'>
          <p>0</p>
          <p className='text-sm text-[#818181]'>Đang theo dõi</p>
        </div>
        <div className='w-[30%] profile-item py-2'>
          <p>0</p>
          <p className='text-sm text-[#818181]'>Bạn bè</p>
        </div>
        <div className='w-[100px] h-[100px] rounded-xl border-[2px] border-[#1A1A1A] absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-50%]'>
          <img src={user?.avatar} alt="" className='w-[100px] h-[100px] rounded-xl object-cover' />
        </div>
      </div>
      <div className='profile-item pt-3'>
        <p>{user?.name}</p>
        <p className='text-[#818181]'>ProAoe</p>
      </div>
      <div className='py-6 profile-item'>
        <p>Giới thiệu bản thân</p>

      </div>
      <div className='profile-item py-3 absolute left-0 bottom-0  w-full'>
        <Link
          href={`/profile/${user?.id}`}
          className='px-6 py-2 text-[#ADADAD] hover:text-white bg-[#2F2F2F] rounded-lg'
        >
          My Profile
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard
