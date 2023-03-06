import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DotSelect from '../DotSelect/DotSelect';

const PendingFriend = () => {
  const [isZoom, setIsZoom] = useState(true);

  const { userProfile } = useSelector(state => state.user);

  const hadleZoom = () => setIsZoom(!isZoom);

  // console.log(userProfile);
  return (
    <div className='box p-2'>

      <div className='py-2 border-b-[1px] flex items-center justify-between'>
        <p>Lời mời kết bạn</p>
        <DotSelect hadleZoom={hadleZoom}/>
      </div>

      {isZoom && (
        <div className='space-y-4 h-[300px] overflow-y-auto'>
          {userProfile?.pendingFriends?.map((item, index) => (
            <div key={index} className=' border-b-[1px]'>
              <div className='flex items-center gap-2 py-3'>
                <div className='w-16 h-16 border-[2px] border-[#1a1a1a] rounded-lg'>
                  <img src={item?.avatar} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <div className='w-[90%]'>
                  <span className='font-bold'>{item?.name} </span>
                  <span>Muốn kết bạn với bạn</span>
                </div>
              </div>

              <div className='pb-4 flex justify-evenly'>
                <button className='py-1 px-6 bg-[#FFFD01] rounded-lg text-black'>Đồng ý</button>
                <button className='py-1 px-6 bg-[#1F1F1F] rounded-lg'>Từ chối</button>
              </div>
            </div>
          ))}
        </div>

      )}

    </div>
  )
}

export default PendingFriend
