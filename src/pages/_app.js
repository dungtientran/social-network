import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '@/redux/store';


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout >
        <Head>
          <title>Đang xây ....</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

