import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { FiUpload } from 'react-icons/fi';

const Model = ({ title, openModel, user }) => {
    return (
        <div className='bg-black-rgba fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center'>
            <div className='w-[800px] min-h-[50%] max-h-screen box p-3 m-auto overflow-y-auto h-full'>
                <div className='text-center py-4 border-b-[1px] border-gray-300'>
                    <span className='text-xl'>{title || 'Loading'}</span>
                    <span
                        className='float-right text-gray-500 hover:text-white cursor-pointer'
                        onClick={() => openModel()}
                    >
                        <MdOutlineCancel size={30} />
                    </span>
                </div>
                {/* avatar */}
                <div className=' p-3 '>
                    <div className='flex items-center justify-between'>
                        <div >
                            <p className='text-xl p-2' >Ảnh đại diện</p>
                        </div>
                        <div >
                            <label htmlFor="avatar"
                                className='w-full flex gap-2 items-center p-1 justify-center text-sm bg-[#323436] cursor-pointer hover:bg-black rounded-lg'>
                                <FiUpload size={28} />
                                <span className='text-lg'>Đổi avatar</span>
                                <input type="file" id='avatar' name='avatar' hidden />
                            </label>
                        </div>
                    </div>
                    <div className='flex items-center justify-center p-6'>
                        <div className='w-[200px] h-[200px] rounded-full'>
                            <img src={user?.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                        </div>
                    </div>
                </div>

                {/* imgBg */}
                <div className=' p-3 '>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-xl p-2' >Ảnh nền</p>
                        </div>
                        <div >
                            <label htmlFor="imageBg"
                                className='w-full flex gap-2 items-center p-1 justify-center text-sm bg-[#323436] cursor-pointer hover:bg-black rounded-lg'>
                                <FiUpload size={28} />
                                <span className='text-lg'>Đổi ảnh nền</span>
                                <input type="file" id='imageBg' name='imageBg' hidden />
                            </label>
                        </div>
                    </div>
                    <div className='flex items-center justify-center p-6'>
                        <div className='w-[400px] h-[300px] rounded-full'>
                            <img src={user?.imageBg} alt="" className='w-full h-full object-cover rounded-lg' />
                        </div>
                    </div>
                </div>

                {/* Giới thiệu */}

                <div>
                    
                </div>

            </div>
        </div>
    )
}

export default Model