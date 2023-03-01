import React from 'react'
import PostItem from './PostItem'

const Posts = ({listPost, user}) => {
  return (
    <div className='py-4 flex flex-col gap-6 w-full'>
       {listPost?.map((item, index) => (
        <PostItem user={user} key={index} post = {item}/>
      ))}
    </div>
  )
}


export default Posts
