import MesengerInput from '@/components/Messenger/MesengerInput'
import MessengerLeft from '@/components/Messenger/MessengerLeft'
import MessengerShow from '@/components/Messenger/MessengerShow'
import { axiosConfig, SeverSideAxios } from '@/lib/axios'
import React, { useEffect } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'

const Messenger = ({ data }) => {

    // useEffect(() => {
    //     const featch = async () => {
    //         const res = await axiosConfig.post('/api/messenger/get-message', { to: '64023df64e101a87e05bf29f' })
    //         console.log(res);
    //     }
    //     featch()
    // }, [])



    return (
        <div className='flex pt-[100px] w-full h-screen border-t'>
            <div className='w-1/5 border-r '>
                <MessengerLeft />
            </div>
            <div className='w-3/5 h-full relative'>
                <div className='flex cursor-pointer shadow-md'>
                    <div className='hover:bg-[#3A3B3C] flex gap-2 items-center p-2 rounded-lg'>
                        <div className='w-12 h-12 rounded-full'>
                            <img src="" alt="" className='image-circle' />
                        </div>
                        <div>
                            <p>Trần dũng</p>
                        </div>
                    </div>
                </div>
                <div className='px-4 flex flex-col gap-3 w-full'>

                        {data?.map((item, index) => (
                            <div key={index} className={`flex  items-center ${item?.fromSelf ? 'justify-end text-red-500' : ''}`}>
                                <p className={``}>{item?.message}</p>
                            </div>
                        ))}               
                </div>
                <div className='p-3 absolute left-0 bottom-0 w-full flex items-center gap-3'>
                    <div className='w-12 h-12 rounded-full'>
                        <img src="" alt="" className='image-circle' />
                    </div>
                    <div className='w-full flex h-full items-center relative'>
                        <input type="text" className='bg-[#3A3B3C] w-full h-full outline-none py-2 pl-3 rounded-2xl' placeholder='Nói gì đê' />
                        <span className=' absolute right-2 p-1 hover:bg-[#4E4F50] rounded-full cursor-pointer'><BsEmojiSmile size={20} className='text-white rounded-full bg-[#0084FF]' /></span>
                    </div>
                    <div>
                        <button className='py-1 px-6 '><AiOutlineSend size={30} className='text-[#0084FF] hover:text-red-500' /></button>
                    </div>
                </div>
            </div>
            <div className='w-1/5 text-center border-l'>
                infor chat
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const token = context.req.cookies.token
    const prao = context.req
    // console.log(prao);
    const res = await SeverSideAxios(token).post('/api/messenger/get-message', { to: '64023df64e101a87e05bf29f' })
    // console.log(res.data);
    return {
        props: { data: res.data }
    }
}


export default Messenger
