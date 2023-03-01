import React from 'react';
import NavBarItem from './NavBarItem';

const NavBar = ({listNav}) => {

  return (
    <div>
      <div className='flex justify-between items-center p-3 rounded-b-xl text-white'>
        {listNav.map((item, index) => (
          <NavBarItem key={index} item={item.name} title = {item.title} patch = {item.patch} />
        ))}
      </div>
    </div>
  )
}

export default NavBar