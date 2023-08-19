import Image from 'next/image'
import React from 'react'

type propType = {
  title: string,
  technologies: string[],
  img: string,
  link: string
}

const Card = ({ title, technologies, img, link }: propType) => {
  return (
    <a href={link} target='_blank' className='overflow-hidden hover:scale-105 transition-all ease-in-out duration-300 rounded-xl shadow-2xl  w-[250px] py-4'>

      <Image
        src={img}
        className="w-full rounded-t-xl"
        alt=""
        width={300}
        height={300}
      />
      <h2 className='mt-2 font-bold text-xl pl-2'>{title}</h2>
      <p className=" mt-2 px-2 text-sm"><strong>Technologies:</strong> {technologies.toString()} </p>



    </a>
  )
}

export default Card
