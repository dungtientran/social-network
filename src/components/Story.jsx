import React from 'react'
import StoryItem from './StoryItem'

const Story = ({listStory}) => {
    // console.log(listStory);
  return (
    <div className='flex py-6 px-16 items-center justify-between overflow-hidden'>
      {listStory.map((item, index) => (
        <StoryItem key={index} image = {item.image} name = {item.name}/>
      ))}
    </div>
  )
}

export default Story
