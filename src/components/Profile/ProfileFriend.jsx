import React from 'react'
import DotSelect from '../DotSelect/DotSelect'

const ProfileFriend = () => {
  return (
    <div className='w-[70%] m-auto my-6 box p-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-underline'>Bạn bè</h1>
        <div className='flex text-[#2E86FF] font-semibold items-center gap-8'>
          <p className='py-2 px-4 hover:bg-hover-bg cursor-pointer rounded-lg'>Lời mời kết bạn</p>
          <p className='py-2 px-4 hover:bg-hover-bg cursor-pointer rounded-lg'>Tìm bạn bè</p>
        </div>
      </div>
      <div>
        <div className='my-6 flex'>
          <p className='py-2 px-4 text-[#2E89FF] font-semibold border-b-[3px] border-[#2E89FF]'>Tất cả bạn bè</p>
        </div>

        <div className='flex flex-wrap'>

          <div className='flex w-1/2 items-center justify-between'>
            <div className=' flex items-center gap-3'>
              <div className='w-20 h-20 rounded-lg overflow-hidden'>
                <img src="" alt="" className='w-full h-full object-cover' />
              </div>
              <div>
                <p className='text-lg'>Trần Dũng</p>
              </div>
            </div>
            <div><DotSelect /></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProfileFriend
