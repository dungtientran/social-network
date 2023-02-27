import CreatePost from '@/components/CreatePost';
import FriendOnline from '@/components/FriendOnline';
import Header from '@/components/Header';
import MessengerAll from '@/components/MessengerAll';
import PendingFriend from '@/components/PendingFriend';
import Posts from '@/components/Posts';
import ProfileCard from '@/components/ProfileCard';
import Story from '@/components/Story';
import React from 'react';




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

const listPost = [
  {
    avatar: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Dũng',
    time: '1 phút trước',
    img: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980641/vii8rn8memosqggzhn6v.jpg',
    title: 'Hahaha'
  },
  {
    avatar: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Dũng',
    time: '1 phút trước',
    img: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980641/vii8rn8memosqggzhn6v.jpg',
    title: 'Hahaha'
  },

]

const user = {
  avatar: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
  name: 'Dũng'
}

const Home = () => {
  return (
    <div>
      <Header />
      <div className='flex justify-between min-h-screen pt-[100px] px-9'>
        <div className='min-w-[20%] px-3 h-full'>
          {/* <div className='h-[62px]'>
          Search
        </div> */}
          <ProfileCard user={user} />
          <MessengerAll />
        </div>
        <div className='max-w-[60%] m-auto bg-[#1A1A1A] px-16'>
          {/* <NavBar listNav={icons} /> */}
          <Story listStory={listStory} />
          <CreatePost user={user} />
          <Posts listPost={listPost} />
        </div>
        <div className='min-w-[20%] h-full'>
          {/* <div className='h-[62px]'>
          <Logout user = {user}/>
        </div> */}
          <PendingFriend />
          <FriendOnline />
        </div>
      </div>
    </div>
  )

}

export default Home