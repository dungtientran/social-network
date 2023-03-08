import React from 'react';
import Logout from './Logout';
import NavBar from './NavBar';
import Search from './Search';
import { iconsHeader } from '@/lib/iconsHeader/iconsHeader';
import logo from '../../lib/iconsHeader/logo/logo.png'
const Header = () => {
    return (
        <div className='fixed bg-[#1a1a1a] top-0 left-0 z-40 w-full flex justify-between items-center px-9'>
            <div className='w-[20%] flex items-center gap-3'>
                <div className='bg-white w-10 h-10 rounded-full overflow-hidden'>
                    {/* <img src='https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png' alt="" /> */}
                </div>
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