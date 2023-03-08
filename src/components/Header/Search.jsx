import React from 'react';
import { CiSearch } from 'react-icons/ci'

const Search = ({ onClickIput }) => {
  // console.log(onClickIput());
  return (
    <div className='w-full'>
      <div className='flex w-full'>
        <p className='bg-[#3A3B3C] h-full rounded-l-3xl py-2 pl-2'><CiSearch size={22} /></p>
        <input
          type="text"
          className='h-full inline-block py-2 w-full rounded-r-3xl px-3 outline-none bg-[#3A3B3C]'
          placeholder='Tìm kiếm...'
          onClick={() => onClickIput(true)}
        />
      </div>
    </div>
  )
}

export default Search
