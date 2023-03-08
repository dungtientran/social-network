import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const NavBarItem = ({item, title, patch}) => {
  const router = useRouter();

  return (
    <Link href={patch} title={title} className='p-2 rounded-md hover:text-[#FBF92C] duration-500'>
      <span className={`${router.pathname === patch && 'text-yl item-navbar'}`}>{item}</span>
    </Link>
  )
}

export default NavBarItem
