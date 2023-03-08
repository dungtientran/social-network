import React, { useState } from 'react'

const StoryItem = ({image, name}) => {
  const [isLoading, setIsLoading] = useState(false);


  return (

    <div className='story-item' onClick={() => setIsLoading(!isLoading)}>
      <div className={`story-item-img  ${isLoading ? 'stoty-item-loading' : '' }`}>
        <img src={image} alt={name} className='w-full h-full rounded-2xl object-cover p-[1px] absolute z-10 hover:border-[#ff0052]' />
      </div>
      <div>
        <p className='text-sm font-semibold duration-700'>{name}</p>
      </div>
    </div>
  )
}

export default StoryItem
