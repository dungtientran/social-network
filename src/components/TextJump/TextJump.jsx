import React from 'react';

const TextJump = ({text}) => {
    // const text= 'Đăng nhập...';
    const arrText= text?.split('');
  return (
    <div className='text-3xl h-[10%] p-10 flex items-center justify-center space-x-1 textJump'>
        {arrText?.map((item, index) => (
            <span style={{"--i": index + 1}} key={index} className='relative inline-block'>{item}</span>
        ))}
    </div>
  )
}

export default TextJump