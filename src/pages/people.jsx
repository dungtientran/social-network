import Layout from '@/components/Layout';
import { apiGetAllUser } from '@/lib/user/getAllUser';
import Head from 'next/head';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs'

const People = () => {
  const [allUser, setAllUser] = useState();
  const [isSendAdd, setIsSendAdd] = useState(false);

  useEffect(() => {
    const fechAllUser = async () => {
      const res = await apiGetAllUser();
      console.log(res);
      setAllUser(res)
    }
    fechAllUser()
  }, [])

  return (
    <Layout>
      <div className='mt-[100px]'>
        <Head>
          <title>Mọi người</title>
        </Head>
        <div className='flex'>
          <div className='w-[20%] box h-screen p-3'>
            <div>
              <div className='flex items-center gap-3'>
                <button> <BsArrowLeft size={30} /></button>
                <p className='text-2xl font-semibold'>Gợi ý</p>
              </div>
              <div>
                <p className='font-semibold'>Những người bạn có thể biết</p>
              </div>
            </div>
            <div className='mt-2 h-full overflow-y-auto'>
              {allUser?.map((item, index) => (
                <div key={index} className='flex py-2 gap-3 cursor-pointer'>
                  <div className='w-16 h-16 rounded-full'>
                    <img src={item?.profile?.avatar} alt={item?.name} className='w-full h-full object-cover rounded-full' />
                  </div>
                  <div>
                    <p className='text-lg font-semibold'>{item?.name}</p>
                    {isSendAdd ? (
                      <div className='flex gap-1'>
                        <button className='py-1 px-2 bg-black rounded-md'>Đã gửi lời mời</button>
                        <button className='py-1 px-2 bg-black rounded-md'>Hủy lời mời</button>
                      </div>
                    ) : (
                      <button className='py-1 px-2 bg-black rounded-md' onClick={() => setIsSendAdd(true)}>Thêm bạn bè</button>

                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-[80%]'>

          </div>
        </div>
      </div>
    </Layout>
  )
}

// export const getServerSideProps = async() => {
//   const data = await apiGetAllUser()
//   console.log(data);
//   return {
//     props: {
//       data
//     }
//   }
// }

export default People 