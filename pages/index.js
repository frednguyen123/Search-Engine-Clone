import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon, SearchIcon, ViewGridIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`)
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Pyro Search Engine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Email</p>
          <p className='link'>Images</p>
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
          <Avatar url='https://coaching.papareact.com/ai9'/>
        </div>
      </header> 

      {/* Body */}
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <div className='flex flex-row items-center'>
          <h1 className='text-orange-500 text-6xl font-bold'>Pyro</h1>
          <Image 
            src="https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg/revision/latest/top-crop/width/360/height/360?cb=20220119211527"
            width={150}
            height={150}
          />
          <h1 className='text-orange-500 text-6xl font-bold'>Portal</h1>
        </div>

        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
        rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className='h-5' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Pyro Search</button>
          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>
      
      <Footer />

    </div>
  )
}
