import React from 'react'

const StoryItem = ({image, name}) => {
  return (
    <div className='story-item text-[#909090]'>
      <div className='story-item-img'>
        <img src={image} alt={name} className=' w-full h-full rounded-2xl object-cover'/>
      </div>
      <div>
        <p className='text-sm font-semibold duration-700'>{name}</p>
      </div>
    </div>
  )
}

export default StoryItem
