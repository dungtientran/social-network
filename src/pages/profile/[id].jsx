import CreatePost from '@/components/CreatePost';
import Posts from '@/components/Posts';
import { getPostUserAction } from '@/redux/sliceRducer/postSlice';
import { getUserProfileAction } from '@/redux/sliceRducer/userSlice';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHome, AiOutlineEdit } from 'react-icons/ai';
import Head from 'next/head';
import Model from '@/components/Model';
import ProfileEdit from '@/components/ProfileEdit';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const { userProfile } = useSelector(state => state.user);
  const { postUser } = useSelector(state => state.posts);
  const [isOpenModel, setIsOpenModel] = useState(false);

  const dispatch = useDispatch();
  // console.log(postUser);
  useEffect(() => {
    if (id) {
      dispatch(getUserProfileAction(id));
      dispatch(getPostUserAction(id));
    }
  }, [id]);

  // console.log(userProfile);

  const openModel = () => setIsOpenModel(false)

  return (
    <div className=''>
      <Head>
        <title>{userProfile?.name} - Trang cá nhân</title>
      </Head>
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
                  <button onClick={() => setIsOpenModel(true)} className='flex items-center gap-2 hover:bg-black py-1 px-4 rounded-md bg-[#3A3B3C]'>
                    <AiOutlineEdit size={20}/>
                    <span className=' font-semibold'>Chỉnh sửa trang cá nhân</span>
                  </button>
                </div>
              </div>

              <div className='text-lg flex items-center p-1 gap-2 border-t-[0.1px] border-[#9FA2A6] mt-3 '>
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
      <div className='w-[70%] m-auto flex mt-6 gap-6'>
        <div className='w-1/3 box p-3'>
          <div>
            <div>
              <h1 className='text-2xl'>Giới thiệu</h1>
            </div>
            <div>
              <p>
                <span></span>
              </p>
            </div>
          </div>
        </div>
        <div className='w-2/3'>
          <CreatePost user={userProfile} />
          <Posts listPost={postUser} user={userProfile} />
        </div>
      </div>
      {isOpenModel && <Model title={'Chỉnh sửa thông tin cá nhân'} openModel={openModel} user={userProfile} >
        <ProfileEdit user={userProfile}/>
      </Model>}
      
    </div>
  )
}


// export const getServerSideProps = async({params}) => {
//   const data = await apiGetUserProfile(params.id)
//   console.log(data);
//   return {
//     props: {
//       result: 123
//     }
//   }
// }

export default Profile