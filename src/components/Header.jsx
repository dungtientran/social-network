import React from 'react';
import Logout from './Logout';
import NavBar from './NavBar';
import Search from './Search';
import { iconsHeader } from '@/lib/iconsHeader/iconsHeader';


const Header = () => {
   
    return (
        <div className='fixed bg-[#1A1A1A] top-0 left-0 z-40 w-full flex justify-between items-center px-9'>
            <div className='w-[20%]'>
                <Search />
            </div>
            <div className='w-[30%]'>
                <NavBar listNav={iconsHeader} />
            </div>
            <div className='w-[20%]'>
                <Logout />
            </div>
        </div>
    )
}

export default Header