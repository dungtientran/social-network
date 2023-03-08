import Loading from '@/components/Loading/Loading';
import TextJump from '@/components/TextJump/TextJump';
import { userLoginAction, userRegisterAction } from '@/redux/sliceRducer/userSlice';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTexJump, setIsTextJump] = useState(false);

  const { isLoading, message, err } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const router = useRouter();
  const token = Cookies.get('token');
  let user
  isLogin ? user = { name, email, password } : user = { email, password };
  const handleSubmit = async (e) => {
    e.preventDefault();
    isLogin ? dispatch(userRegisterAction(user))
      : dispatch(userLoginAction(user));
  }
  useEffect(() => {
    isLoading ? setIsTextJump(true) : setIsTextJump(false);
    if(message){
      alert(message)
    }
    if(err === 0) {
      setIsLogin(false)
    }
  }, [isLoading, message, err]);

  useEffect(() => {
    if (token) {
      router.push("/")
    }
  }, [token])
  return (

    <div className='bg-[#E6E8EF] md:bg-form flex justify-center items-center w-full h-screen overflow-hidden text-black'>
      <Head>
        <title>{isLogin ? 'Đăng ký' : 'Đăng nhập'}</title>
      </Head>
      {/* website */}
      <div className=' w-[90%] md:w-[70%] overflow-hidden bg-white min-h-[70%] md:flex relative'>
        {/* banner */}
        <div className={`banner-login z-50 hidden md:flex ${isLogin && 'translate-x-[100%] bg-[#ff4b28]'}`}>
          <div className='space-y-4 text-center'>
            <h1 className='text-3xl font-semibold text-white'>
              {isLogin ? (<span>Welcome</span>) : (<><span>Hello, </span><span>Friend!</span></>)}
            </h1>
            <p className='text-white opacity-70'>{isLogin ? 'Đã có tài khoản?' : 'Chưa có tài khoản?'}</p>
            <div>
              <button
                className='uppercase py-1 px-6 border-[1px] border-white rounded-lg text-white hover:bg-white hover:text-black'
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Đăng Nhập' : 'Đăng ký'}
              </button>
            </div>
          </div>
        </div>
        {/* form login */}
        <div className={`form-login ${isLogin && 'md:translate-x-[-100%]'}`}>
          <div className='text-center'>
            <p className='text-sm'></p>
          </div>
          <div>
            <h1 className={`${isTexJump ? 'hidden' : 'block'} text-3xl h-[10%] p-10 flex items-center justify-center`}>{isLogin ? 'Đăng ký' : 'Đăng nhập'}</h1>
            <h1 className={`${isTexJump ? 'block' : 'hidden'}`}>{isLogin ? <TextJump text='Đăng ký...' /> : <TextJump text='Đăng nhập...' />}</h1>
            <form className='h-[80%] flex flex-col gap-7 w-[90%] md:w-[60%] m-auto' onSubmit={handleSubmit}>
              {isLogin ? (
                <>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên</label>
                    <input
                      type="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="login-input" placeholder="Enter your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="login-input" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="login-input" placeholder='Enter your password' required />
                  </div>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <button
                      type="submit"
                      className="button-login">
                      Đăng ký
                    </button>
                  )}
                </>
              ) :
                (
                  <>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input" placeholder="Enter your email" required />
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input" placeholder='Enter your password' required />
                    </div>
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        className="button-login">
                        Đăng nhập
                      </button>
                    )}


                    <button
                      type="submit"
                      className="button-submit">
                      <FcGoogle size={20} />
                      <span>Đăng nhập với Google</span>
                    </button>
                  </>
                )}
            </form>
          </div>
          <div className='h-[10%] text-sm text-center'>
            <p>
              <span className='text-gray-500'>{isLogin ? "Đã có tài khoản?" : "Chưa có tài khoản?"}</span>
              <button className='font-semibold hover:text-blue-700' onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Đăng nhập" : "Đăng ký"}</button>
            </p>
          </div>
        </div>
      </div>
      <div>

      </div>

      {/* mobile */}
      {/* <div className='md:hidden w-[60%] h-[70%] bg-[#F5F0F1] rounded-xl border-[2px] border-white relative overflow-hidden'>
        <div className='flex justify-center w-full h-full mt-3'>
          <form className='mb-login-form'>
            <h1 className='text-2xl font-bold text-center'>Hello Again</h1>
            <p className='text-xl '>Wellcome back you've been messed!</p>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                type="email"
                id="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="login-input rounded-lg" placeholder="Enter your email" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                type="password"
                id="password"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="login-input rounded-lg" placeholder="Enter your email" required />
            </div>
            <div className='text-center'>
              <button className='button-login w-full roudned-lg bg-red-600'>
                Đăng nhập
              </button>
            </div>
            <div className='text-center'>
              <span>-</span>
              <span>Đăng nhập với</span>
              <span>-</span>
            </div>
            <div className={`flex items-center justify-center `}>
              <span className='p-2 border-[2px] border-white rounded-lg hover:border-red-400 cursor-pointer'>
                <FcGoogle size={30} />
              </span>
            </div>
          </form>
        </div>
        <div className={`absolute left-0 hidden bg-[#F5F0F1] bottom-[-79%] w-full rounded-t-lg duration-500 ${isLogin && 'translate-y-[-100%]'}`}>
          <button
            className='text-center py-3 font-bold bg-white w-full hover:text-red-600'
            onClick={() => setIsLogin(!isLogin)}
          >
            Đăng ký
          </button>
          <form className='mb-login-form '>
            <h1 className='text-2xl font-bold text-center'>Hello Again</h1>
            <p className='text-xl '>Wellcome back you've been messed!</p>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                type="email"
                id="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="login-input rounded-lg" placeholder="Enter your email" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                type="password"
                id="password"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="login-input rounded-lg" placeholder="Enter your email" required />
            </div>
            <div className='text-center'>
              <button className='button-login w-full roudned-lg bg-red-600'>
                Đăng nhập
              </button>
            </div>
            <div className='text-center'>
              <span>-</span>
              <span>Đăng nhập với</span>
              <span>-</span>
            </div>
            <div className={`flex items-center justify-center`}>
              <span className='p-2 border-[2px] border-white rounded-lg hover:border-red-400 cursor-pointer'>
                <FcGoogle size={30} />
              </span>
            </div>
          </form>
        </div>

      </div> */}

    </div>
  )
}

export default Login