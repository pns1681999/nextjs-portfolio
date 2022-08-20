import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/themes.scss';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);
  return (
    <Layout>  
      <Head>
        <title>{`Son Pham | ${pageProps.title}`}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
