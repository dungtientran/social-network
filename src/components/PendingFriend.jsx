import React from 'react'

const PendingFriend = () => {
  return (
    <div className='box p-2'>
      <div className='py-2 '>
        <p>Lời mời kết bạn</p>
      </div>
      <div className='border-t-[1px]'>
        <div className='flex items-center gap-2 py-3'>
          <div className='w-16 h-16 border-[2px] border-[#1a1a1a] rounded-lg'>
            <img src='https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg' alt="" className='w-full h-full object-cover rounded-lg' />
          </div>
          <div className='w-[90%]'>
            <span className='font-bold'>Dũng </span>
            <span>Muốn kết bạn với bạn</span>
          </div>
        </div>
        <div className='pb-4 flex justify-evenly'>
          <button className='py-1 px-6 bg-[#FFFD01] rounded-lg text-black'>Đồng ý</button>
          <button className='py-1 px-6 bg-[#1F1F1F] rounded-lg'>Từ chối</button>
        </div>
      </div>
      <div className='border-t-[1px]'>
        <div className='flex items-center gap-2 py-3'>
          <div className='w-16 h-16 border-[2px] border-[#1a1a1a] rounded-lg'>
            <img src='https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg' alt="" className='w-full h-full object-cover rounded-lg' />
          </div>
          <div className='w-[90%]'>
            <span className='font-bold'>Dũng </span>
            <span>Muốn kết bạn với bạn</span>
          </div>
        </div>
        <div className='pb-4 flex justify-evenly'>
          <button className='py-1 px-6 bg-[#FFFD01] rounded-lg text-black'>Đồng ý</button>
          <button className='py-1 px-6 bg-[#1F1F1F] rounded-lg'>Từ chối</button>
        </div>
      </div>
    </div>
  )
}

export default PendingFriend
