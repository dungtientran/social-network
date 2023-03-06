// 'use client';
import CreatePost from '@/components/Posts/CreatePost';
import Header from '@/components/Header/Header';
import MessengerAll from '@/components/MessengerAll/MessengerAll';
import ProfileCard from '@/components/ProfileCard';
import Story from '@/components/Story/Story';
import { SeverSideAxios } from '@/lib/axios';
import React from 'react';
import PendingFriend from '@/components/PendingFriend/PendingFriend';
import { useDispatch } from 'react-redux';
import { openModelSelect } from '@/redux/sliceRducer/modelSelectSlice';
import FriendOnline from '@/components/FriendsOnline.jsx/FriendOnline';

const listStory = [
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },
  {
    image: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Vy Khánh'
  },

]

const Home = ({ messengerchatall, user }) => {
  const distpatch = useDispatch();


  return (
    <div onClick={() => distpatch(openModelSelect(false))}>
      <Header />
      <div className='flex justify-between min-h-screen mt-[100px] px-9'>
        <div className='max-w-[20%] px-3 h-full fixed top-0 left-0 pt-[100px]'>
          <ProfileCard user={user} />
          <MessengerAll messengerchatall={messengerchatall} user={user} />
        </div>
        <div className='min-w-[60%] min-h-screen m-auto bg-[#1A1A1A] px-16'>
          <Story listStory={listStory} />
          <CreatePost user={user} />
          {/* <Posts listPost={listPostSort} /> */}
        </div>
        <div className='min-w-[20%] h-full fixed top-0 right-0 pt-[100px]'>
          <PendingFriend />
          <FriendOnline />
        </div>
      </div>
    </div>
  )

}


export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;
  const userId = context.req.cookies.userId;
  const chatAll = await SeverSideAxios(token).get('/api/messengerall/get-message');
  const user = await SeverSideAxios(token).get(`api/user/profile/${userId}`);
  return {
    props: {
       messengerchatall: chatAll.data, 
       user: user.data,
      }
  }

}



export default Home