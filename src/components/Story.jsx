import React from 'react'
import StoryItem from './StoryItem'

const Story = ({listStory}) => {
    // console.log(listStory);
  return (
    <div className='flex w-[90%] m-auto py-6 items-center justify-between overflow-hidden'>
      {listStory.map((item, index) => (
        <StoryItem key={index} image = {item.image} name = {item.name}/>
      ))}
    </div>
  )
}

export default Story
