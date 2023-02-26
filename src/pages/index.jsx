import CreatePost from '@/components/CreatePost';
import MessengerAll from '@/components/MessengerAll';
import NavBar from '@/components/NavBar';
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

]
const user = {
  avatar: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
  name: 'Dũng'
}

const Home = () => {
  return (
    <div className='flex justify-between min-h-screen p-3'>
      <div className='min-w-[20%] px-3'>
        <div className='h-[62px]'>
          Search
        </div>
        <ProfileCard user = {user}/>
        <MessengerAll />
      </div>
      <div className='min-w-[60%] bg-[#1A1A1A]'>
        <NavBar listNav={icons} />
        <Story listStory={listStory} />
        <CreatePost user={user} />
        <Posts listPost={listPost} />
      </div>
      <div className='min-w-[20%] '>right</div>
    </div>
  )

}

export default Home