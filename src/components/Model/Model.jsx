import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const Model = ({ title, openModel, children }) => {
    return (
        <div
            className='bg-black-rgba fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center'
            onClick={() => openModel()}
        >
            <div
                className='w-[800px] max-h-[95vh] box p-3 m-auto overflow-y-auto scrollChatAll'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='text-center py-4 border-b-[1px] border-gray-300'>
                    <span
                        className='text-xl'
                    >
                        {title || 'Loading'}
                    </span>
                    <span
                        className='float-right text-gray-500 hover:text-white cursor-pointer'
                        onClick={() => openModel()}
                    >
                        <MdOutlineCancel size={30} />
                    </span>
                </div>
                <div className='flex flex-col items-center justify-center h-full p-3'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Model