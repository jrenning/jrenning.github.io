import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import {useTheme} from "../hooks/dark.js"

function MyApp({ Component, pageProps }: AppProps) {
  useTheme()
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
