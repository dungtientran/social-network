import React from 'react'
import PostItem from './PostItem'

const Posts = ({listPost}) => {
  return (
    <div className='py-4 flex flex-col gap-4'>
       {listPost.map((item, index) => (
        <PostItem key={index} post = {item} />
      ))}
    </div>
  )
}

export default Posts
