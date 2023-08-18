import Image from 'next/image'
import React from 'react'

type propType={
    title:string,
    technologies:string[],
    img:string,
    link:string
}

const Card = ({title, technologies, img, link}:propType) => {
  return (
    <div className='  rounded-xl shadow-2xl  w-[250px] py-4'>
      
      <Image 
      src={img} 
      className="w-full" 
      alt="" 
      width={300} 
      height={300}
      />
      <h2 className='mt-2 font-bold text-xl pl-2'>{title}</h2>
      <p className=" mt-2 px-2"><strong>Technologies:</strong> :{technologies.toString()} </p>
      <a  className="px-2 mt-2 text-blue-600 " href={link} target='_blank'>Demo Link</a>

     
    </div>
  )
}

export default Card
