import React from 'react'

const StoryItem = ({image, name}) => {
  return (
    <div className='story-item text-white'>
      <div className='story-item-img'>
        <img src={image} alt={name} className=' w-14 h-14 rounded-full object-cover'/>
      </div>
      <div>
        <p className='text-sm font-semibold duration-700'>{name}</p>
      </div>
    </div>
  )
}

export default StoryItem
