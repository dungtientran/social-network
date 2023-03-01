// 'use client';
import CreatePost from '@/components/CreatePost';
import FriendOnline from '@/components/FriendOnline';
import Header from '@/components/Header';
import MessengerAll from '@/components/MessengerAll';
import PendingFriend from '@/components/PendingFriend';
import Posts from '@/components/Posts';
import ProfileCard from '@/components/ProfileCard';
import Story from '@/components/Story';
import { apiGetPost } from '@/lib/post/getPost';
import React, { useEffect, useState } from 'react';


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

const user = {
  avatar: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
  name: 'Dũng'
}

const Home = () => {
  const [listPost, setListPost] = useState();
  const [listPostSort, setListPostSort] = useState();
  useEffect(() => {
    const fethGetPost = async() => {
      const data = await apiGetPost();
      // console.log(data);
      setListPost(data?.data)
    } 
    fethGetPost() 
  },[]);

  useEffect(() => {
    if(listPost) {
      setListPostSort(listPost.reverse())
    }
  },[listPost]);


  return (
    <div>
      <Header />
      <div className='flex justify-between min-h-screen mt-[100px] px-9'>
        <div className='min-w-[20%] px-3 h-full'>
          <ProfileCard user={user} />
          <MessengerAll />
        </div>
        <div className='min-w-[60%] min-h-screen m-auto bg-[#1A1A1A] px-16'>
          <Story listStory={listStory} />
          <CreatePost user={user} />
          <Posts listPost={listPostSort} />
        </div>
        <div className='min-w-[20%] h-full'>
          <PendingFriend />
          <FriendOnline />
        </div>
      </div>
    </div>
  )

}





export default Home