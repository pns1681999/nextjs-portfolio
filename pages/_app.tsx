import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/themes.scss';
import { useEffect } from 'react';

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
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
