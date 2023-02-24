import Head from 'next/head';
import React from 'react';
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <div className='bg-form flex justify-center items-center w-full h-screen '>
      <Head>
        <title>Login</title>
      </Head>
      <div className='min-w-[70%] bg-white min-h-[70%] md:flex hidden'>
        <div className='w-1/2 hidden md:block'>

        </div>
        <div className=' w-full md:w-1/2 flex flex-col justify-between'>
          <div className='text-center'>
            <p className='text-sm'>GinHan</p>
          </div>
          <div>
            <h1 className='text-3xl h-[10%] p-10 flex items-center justify-center'>Welcome back</h1>
            <form className='h-[80%] flex flex-col gap-7 w-[60%] m-auto'>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500 outline-none" placeholder="Enter your email" required />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500 outline-none" placeholder='********' required />
              </div>
              <button
                type="submit"
                className="text-white bg-black hover:bg-blue-800 
              focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2 text-center
               dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Login
              </button>
              <button
                type="submit"
                className=" bg-[#FFFCF9] text-black border hover:bg-black hover:text-white 
              focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2 text-center
               dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center gap-2">
                <FcGoogle size={20} />
                <span>Sign in with Google</span>
              </button>
            </form>
          </div>
          <div className='h-[10%] text-sm text-center'>
            <p>
              <span className='text-gray-500'>Don't have an account?</span>
              <button className='font-semibold hover:text-blue-700'> Sign Up</button>
            </p>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Login