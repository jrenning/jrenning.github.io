import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Greeting from '../components/Greeting'
import Header from '../components/Header'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col global dark:bg-[#121212]'>
      <Head>
        <title>Jack Renning's Portfolio</title>
        <meta name="description" content="my portfolio" />
      </Head>
      <Greeting />
      <Welcome/>
      <Footer />

    </div>
  )
}

export default Home
