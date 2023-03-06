import React from 'react';
import { AiOutlineHome, AiOutlineEdit } from 'react-icons/ai';


const ProfileHead = ({userProfile, openModel, setKey}) => {

  return (
    <div className='h-[85vh] bg-gradient-to-t from-[#242526] relative'>
    <div className='w-[70%] h-full m-auto'>
      <div className='w-full h-full overflow-hidden]'>
        <img
          src={userProfile?.imageBg}
          alt=""
          className='w-full h-[70%] object-cover '
        />
        <div className='absolute w-[70%] m-auto bottom-0'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4 z-20'>
              <div className='w-[200px] h-[200px] p-2 border rounded-full bg-[#242526]'>
                <img
                  src={userProfile?.avatar}
                  alt=""
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div >
                <h1 className='text-4xl font-bold'>{userProfile?.name}</h1>
                <p className='mt-2'>140 bạn bè</p>
              </div>
            </div>
            <div className='px-6'>
              <button onClick={() => openModel(true)} className='flex items-center gap-2 hover:bg-black py-1 px-4 rounded-md bg-[#3A3B3C]'>
                <AiOutlineEdit size={20}/>
                <span className=' font-semibold'>Chỉnh sửa trang cá nhân</span>
              </button>
            </div>
          </div>

          <div className='text-lg flex items-center p-1 gap-2 border-t-[0.1px] border-[#9FA2A6] mt-3 '>
            <div className='py-2 px-5 hover:bg-[#5B5F64] rounded-lg cursor-pointer' onClick={() => setKey(1)}><p>Bài viết</p></div>
            <div className='py-2 px-5 hover:bg-[#5B5F64] rounded-lg cursor-pointer' onClick={() => setKey(2)}><p>Bạn bè</p></div>
            <div className='py-2 px-5 hover:bg-[#5B5F64] rounded-lg cursor-pointer' onClick={() => setKey(3)}><p>Ảnh</p></div>
            <div className='py-2 px-5 hover:bg-[#5B5F64] rounded-lg cursor-pointer' onClick={() => setKey(4)}><p>Video</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileHead
