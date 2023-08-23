import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
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
  )
}

export default About
