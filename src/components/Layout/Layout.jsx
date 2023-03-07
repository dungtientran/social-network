import { useRouter } from 'next/router';
import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      {router.pathname !== '/login' && <Header />}
      {children}
    </div>
  )
}

export default Layout