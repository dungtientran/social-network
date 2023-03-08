import React, { useEffect, useRef, useState } from 'react';
import Logout from './Logout';
import NavBar from './NavBar';
import Search from './Search';
import { iconsHeader } from '@/lib/iconsHeader/iconsHeader';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

const Header = () => {

    const [isOnClickSearch, setIsOnClickSearch] = useState(false);
    const searchRef = useRef();

    const onClickIput = (item) => setIsOnClickSearch(item);

    useEffect(() => {
        let hadleClickOusideSearch = (e) => {
            if (!searchRef.current.contains(e.target)) {
                setIsOnClickSearch(false)
            }
        }
        document.addEventListener('mousedown', hadleClickOusideSearch)
        return () => {
            document.removeEventListener('mousedown', hadleClickOusideSearch)
        }
    }, []);

    return (
        <div className='fixed bg-[#1a1a1a] top-0 left-0 z-40 w-full flex justify-between items-center px-9 '>
            <div className='w-[20%] flex  items-center gap-3'>
                {isOnClickSearch ? (
                    <p className=''><BsArrowLeft size={20} /></p>
                ) : (
                    <Link href='/' className=' w-[20%] flex justify-center  '>
                        <p className='w-10 h-10 rounded-full overflow-hidden bg-white flex items-center p-1'>Logo</p>
                    </Link>
                )}
                <div ref={searchRef} className='w-full'>
                    <Search onClickIput={onClickIput} />
                </div>
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