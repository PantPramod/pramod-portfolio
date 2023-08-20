import React from 'react'
import Image from 'next/image'
import Card from './components/Card'
import ProgressBar from './components/ProgressBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Blogs from './components/Blogs'
const Home = () => {
  return (
    <>
      <style>
        {`
        .myclass:hover {
          filter:invert(1) hue-rotate(180deg);
        }
      `}
      </style>


      <div className=''>
        <div className='relative'>
          <Image
            src="/1.png"
            alt="cover"
            width={1300}
            height={500}
            className='p-4 w-full rounded-3xl max-h-[300px] object-contain'
          />
          <Image
            src="/pp.png"
            alt="profile"
            width={200}
            height={200}
            className='mx-auto -mt-20'
          />
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <a href="https://github.com/PantPramod" target='_blank'>
          <button className=' bg-black text-white px-8 py-3 rounded-md font-bold text-xl hover:bg-gray-800 transition-all ease-in-out duration-300 w'>Github</button>
        </a>
        <a href="https://www.linkedin.com/in/pramodpant100" target='_blank' className='ml-5'>
          <button className=' bg-blue-600 text-white px-8 py-3 rounded-md font-bold text-xl hover:bg-blue-500 transition-all ease-in-out duration-300'>Linkedin</button>
        </a>
      </div>
      <Skills />
      <Projects />
      <Blogs/>





    </>
  )
}

export default Home
