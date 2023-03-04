import CreatePost from '@/components/CreatePost';
import Posts from '@/components/Posts';
import { getPostUserAction } from '@/redux/sliceRducer/postSlice';
import { getUserProfileAction } from '@/redux/sliceRducer/userSlice';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Model from '@/components/Model';
import ProfileHead from '@/components/Profile/ProfileHead';
import ProfileFriend from '@/components/Profile/ProfileFriend';
import ProfileImage from '@/components/Profile/ProfileImage';
import ProfoleVideo from '@/components/Profile/ProfoleVideo';


const Profile = () => {

  const router = useRouter();
  const { id } = router.query;
  const { userProfile } = useSelector(state => state.user);
  const { postUser } = useSelector(state => state.posts);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [keySelection, setKeySelection] = useState(1);

  const dispatch = useDispatch();
  // console.log(id);


  useEffect(() => {
    if (id) {
      dispatch(getUserProfileAction(id));
      dispatch(getPostUserAction(id));
    }
  }, [id]);

  const openModel = (item) => setIsOpenModel(item);
  const setKey = (item) => setKeySelection(item);
  // console.log(userProfile);
  return (
    <div>
      <Head>
        <title>{userProfile?.name} - Trang cá nhân</title>
      </Head>

      {/* Profile header */}
      <ProfileHead userProfile={userProfile} openModel={openModel} setKey={setKey} />

      {/* Post */}
      {keySelection === 1 && (
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
      )}
      {keySelection == 2 && <ProfileFriend />}
      {keySelection == 3 && <ProfileImage />}
      {keySelection == 4 && <ProfoleVideo />}
      {isOpenModel && <Model title={'Chỉnh sửa thông tin cá nhân'} openModel={openModel} user={userProfile} >
        <ProfileEdit user={userProfile} />
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