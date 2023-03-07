import CreatePost from '@/components/Posts/CreatePost';
import Posts from '@/components/Posts/Posts';
import { getPostUserAction } from '@/redux/sliceRducer/postSlice';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Model from '@/components/Model/Model';
import ProfileHead from '@/components/Profile/ProfileHead';
import ProfileFriend from '@/components/Profile/ProfileFriend';
import ProfileImage from '@/components/Profile/ProfileImage';
import ProfoleVideo from '@/components/Profile/ProfoleVideo';
import ProfileEdit from '@/components/Profile/ProfileEdit';
import { SeverSideAxios } from '@/lib/axios';
import ProfileIntroduce from '@/components/Profile/ProfileIntroduce';


const Profile = ({ userProfile }) => {

  const router = useRouter();
  const { id } = router.query;
  const { postUser } = useSelector(state => state.posts);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [keySelection, setKeySelection] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    isOpenModel ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  }, [isOpenModel])

  useEffect(() => {
    if (id) {
      dispatch(getPostUserAction(id));
    }
  }, [id]);

  const openModel = (item) => setIsOpenModel(item);
  const setKey = (item) => setKeySelection(item);


  // console.log(userProfile);
  return (
    <div>
      {/* <Head>
        <title>{userProfile?.name} - Trang cá nhân</title>
      </Head> */}

      <ProfileHead userProfile={userProfile} openModel={openModel} setKey={setKey} />

      {/* Post */}
      {keySelection === 1 && (
        <div className='w-[70%] m-auto flex mt-6 gap-6'>
          <div className='w-1/3 box p-3 h-[250px]'>
            <ProfileIntroduce user={userProfile} />
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


      {isOpenModel && <Model title='Chỉnh sửa thông tin cá nhân' openModel={openModel} user={userProfile} >
        <ProfileEdit user={userProfile} />
      </Model>}

    </div>
  )
}


export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;
  const id = context.params.id;
  const { data } = await SeverSideAxios(token).get(`api/user/profile/${id}`);
  return {
    props: {
      userProfile: data
    }
  }
}

export default Profile