import Image from 'next/image'
import React from 'react'

const Cloud = () => {
  return (
    <>
      <style>
        {`
        .myclass:hover {
          filter:invert(1) hue-rotate(180deg);
        }
      `}
      </style>

      <div className='myclass max-w-[1300px] mx-auto  transition-all ease-in-out duration-1000 h-screen overflow-hidden flex flex-col justify-center items-center relative'>
        <div className=" w-full p-2 sm:p-10 bg-gray-900 sm:bg-transparent">
          <h1 className=" font-['Montserrat'] text-center font-extrabold sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mx-auto  text-2xl text-white lg:text-5xl">Beyond Clicks and Scrolls: Building Engaging Web Experiences</h1>
          <p className="text-center mt-2  sm:mt-4 text-xl font-['Montserrat']  text-white sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] mx-auto">Transforming Users into Participants through Interactive Design</p>
          <Image
            width={1000}
            height={500}
            src="/cloud1.png"
            alt="cloud"
            className='z-[-1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover w-[90%] hidden sm:block'
          />
        </div>
      </div>
    </>
  )
}

export default Cloud
