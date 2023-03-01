import CreatePost from '@/components/CreatePost';
import { getUserProfileAction } from '@/redux/sliceRducer/userSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const {userProfile} = useSelector(state => state.user)
  const dispatch = useDispatch();
  // console.log(result);
  useEffect(() => {
    dispatch(getUserProfileAction('63fe255dfaef29718e888835'))
  }, [dispatch])

  console.log(userProfile);
  return (
    <div className=''>
      {/* Head */}
      <div className='h-[85vh] bg-gradient-to-t from-[#242526] relative'>
        <div className='w-[70%] h-full m-auto'>
          <div className='w-full h-full overflow-hidden]'>
            <img
              src={userProfile?.imageBg}
              alt=""
              className='w-full h-[70%] object-cover '
            />

            <div className='absolute w-[70%] m-auto bottom-0'>
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
              <div className='text-lg flex items-center p-1 gap-2 border-t mt-3 '>
                <div className='py-2 px-5 hover:bg-[#5B5F64] rounded-lg cursor-pointer'><p>Bài viết</p></div>
                <div className='py-2 px-5 hover:bg-[#5B5F64] rounded-lg cursor-pointer'><p>Bạn bè</p></div>
                <div className='py-2 px-5 hover:bg-[#5B5F64] rounded-lg cursor-pointer'><p>Ảnh</p></div>
                <div className='py-2 px-5 hover:bg-[#5B5F64] rounded-lg cursor-pointer'><p>Video</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Post */}
      <div className='w-[70%] m-auto flex mt-6'> 
        <div className='w-1/3'>
          adasd
        </div>
        <div className='w-2/3'>
              <CreatePost />
        </div>
      </div>

    </div>
  )
}

// export const getServerSideProps = async() => {
//   const data = await apiGetUserProfile('63fe255dfaef29718e888835')
//   console.log(data);
//   return {
//     props: {
//       result: 123
//     }
//   }
// }

export default Profile