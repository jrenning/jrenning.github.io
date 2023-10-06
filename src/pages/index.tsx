import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Greeting from '../components/Greeting'
import Header from '../components/Header'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col global h-screen dark:bg-dark_background animate-fade_in">
      <Head>
        <title>Jack Renning&#39;s Portfolio</title>
        <meta name="description" content="my portfolio" />
      </Head>
      <Greeting />
      <Welcome />
      <Footer />
    </div>
  );
}

export default Home
