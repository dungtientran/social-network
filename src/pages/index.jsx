import CreatePost from '@/components/CreatePost';
import FriendOnline from '@/components/FriendOnline';
import MessengerAll from '@/components/MessengerAll';
import NavBar from '@/components/NavBar';
import PendingFriend from '@/components/PendingFriend';
import Posts from '@/components/Posts';
import ProfileCard from '@/components/ProfileCard';
import Story from '@/components/Story';
import React from 'react';
import { BiHomeAlt, BiMessageSquareDots, BiTimeFive } from 'react-icons/bi';
import { BsPeople, BsFlag } from 'react-icons/bs';
import { RiSettingsLine } from 'react-icons/ri';


const icons = [
  {
    name: <BiHomeAlt size={22} />,
    title: 'Trang chủ'
  },
  {
    name: <BsPeople size={22} />,
    title: 'Mọi người'
  },
  {
    name: <BiMessageSquareDots size={22} />,
    title: 'Tin nhắn'
  },
  {
    name: <BiTimeFive size={22} />,
    title: 'Hoạt động'
  },
  {
    name: <BsFlag size={22} />,
    title: 'Gắn cờ'
  },
  {
    name: <RiSettingsLine size={22} />,
    title: 'Cài đặt'
  },


]

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
    <div className='flex justify-between min-h-screen pt-3 px-9'>
      <div className='min-w-[20%] px-3 fixed top-0 left-0 h-full'>
        <div className='h-[62px]'>
          Search
        </div>
        <ProfileCard user = {user}/>
        <MessengerAll />
      </div>
      <div className='max-w-[60%] m-auto bg-[#1A1A1A] px-16'>
        <NavBar listNav={icons} />
        <Story listStory={listStory} />
        <CreatePost user={user} />
        <Posts listPost={listPost} />
      </div>
      <div className='min-w-[20%] fixed top-0 right-0 h-full'>
        <div className='h-[62px]'>

        </div>
        <PendingFriend />
        <FriendOnline />
      </div>
    </div>
  )

}

export default Home