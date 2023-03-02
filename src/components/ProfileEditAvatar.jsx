import React, { useState } from 'react'
import { BsCardImage } from 'react-icons/bs'
import { FiUpload } from 'react-icons/fi'

const ProfileEditAvatar = ({openModel}) => {
    const [listImage, setListImage] = useState();

    const handleUpLoadImage = (e) => {
        const files = [...e.target.files];
        // console.log(files);
        let err;
        let urlImg;
        let imageArr = [];
        files.forEach(file => {
            if (!file) return err = 'Lỗi ảnh';
            if (file.type !== 'image/jpeg' && file.type !== 'image/png') return 'Sai định dạng ảnh';
            return imageArr.push(file)
        })
        setListImage(imageArr)
    }
    listImage?.map(item => {
        const a = URL.createObjectURL(item)
        console.log(a);
    })
    return (
        <>
            <div className='my-2 w-full'>
                <label
                    htmlFor="avatar"
                    className='w-full flex gap-2 items-center py-2 justify-center text-sm bg-[#323436] cursor-pointer hover:bg-black rounded-lg'>
                    <FiUpload size={22} />
                    <span >Đổi avatar</span>
                    <input type="file" id='avatar' onChange={handleUpLoadImage} name='avatar' hidden />
                </label>
            </div>
            <div className='min-h-[300px] bg-[#323436] box w-full flex items-center justify-center my-2'>

                {listImage ? listImage?.map((item, index) => (
                    <div className='flex flex-col'>
                        <div key={index} className='flex flex-col justify-center items-center w-full p-4'>
                            <img src={URL.createObjectURL(item)} alt="" className='w-full object-cover rounded-lg' />
                        </div>
                    </div>
                )) : (
                    <div className='h-full flex flex-col justify-center items-center'>
                        <BsCardImage size={40} />
                        <p>Avatar</p>
                    </div>
                )}

            </div>
            {listImage && (
                <div className='border-t-[1px] border-gray-300 w-full py-2 flex justify-end'>
                    <div className='space-x-3'>
                        <button className='py-1 px-4 rounded-md hover:bg-black-rgba text-[#2374E1]' onClick={() => openModel(false)}>Hủy</button>
                        <button className='py-1 px-4 rounded-md  bg-[#2374E1]'>Lưu</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProfileEditAvatar
