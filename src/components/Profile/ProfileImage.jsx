import React from 'react'

const ProfileImage = () => {
  return (
    <div className='w-[70%] m-auto my-6 box p-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-underline'>Ảnh</h1>
      </div>
      <div>
        <div className='my-6 flex'>
          <p className='py-2 px-4 text-[#2E89FF] font-semibold border-b-[3px] border-[#2E89FF]'>Ảnh của bạn</p>
          <p className='py-2 px-4 text-[#2E89FF] font-semibold border-b-[3px] border-[#2E89FF]'>Avatar</p>
          <p className='py-2 px-4 text-[#2E89FF] font-semibold border-b-[3px] border-[#2E89FF]'>Ảnh nền</p>
        </div>
        <div className='grid grid-cols-5 w-full'>
          <div className='w-full h-full rounded-lg'>
            <img src="" alt="" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProfileImage
