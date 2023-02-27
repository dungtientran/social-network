import React from 'react';
import Logout from './Logout';
import NavBar from './NavBar';
import Search from './Search';
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


];
const user = {
    avatar: 'https://res.cloudinary.com/dbkgkyh4h/image/upload/v1674980785/aztdhoncs6wzqlbb7tqz.jpg',
    name: 'Dũng'
};

const Header = () => {
    return (
        <div className='fixed bg-[#1A1A1A] top-0 left-0 w-full flex justify-between items-center px-9'>
            <div className='w-[20%]'>
                <Search />
            </div>
            <div className='w-[30%]'>
                <NavBar listNav={icons} />
            </div>
            <div className='w-[20%]'>
                <Logout user = {user}/>
            </div>
        </div>
    )
}

export default Header