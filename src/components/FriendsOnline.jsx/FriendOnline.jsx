import React from 'react'
import DotSelect from '../DotSelect/DotSelect'

const FriendOnline = () => {
  return (
    <div className='box w-full h-full p-3 mt-4 '>
      <div className='flex items-center justify-between border-b py-2'>
        <p> Người liên hệ</p>
      </div>
      <div className='mt-1'>

        <div className='flex items-center gap-4 cursor-pointer hover:bg-hover-bg p-3 rounded-lg'>
          <div className='w-10 h-10 rounded-full '>
            <img src="" alt="" className='image-circle' />
          </div>
          <div>
            <p>Trần Dũng</p>
          </div>
        </div>


      </div>
      
    </div>
  )
}

export default FriendOnline
