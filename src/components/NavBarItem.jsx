import Link from 'next/link'
import React from 'react'

const NavBarItem = ({item, title}) => {
  return (
    <Link href="/" title={title} className='p-2 rounded-md hover:text-[#FBF92C] duration-500'>
      <span>{item}</span>
    </Link>
  )
}

export default NavBarItem
