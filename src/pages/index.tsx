import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Greeting from '../components/Greeting'
import Header from '../components/Header'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting />
      <Welcome/>
      <Footer />

    </div>
  )
}

export default Home
