import React from 'react'
import Image from 'next/image'
import Card from './components/Card'
import ProgressBar from './components/ProgressBar'
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
            className='absolute left-1/2 top-[75%] -translate-x-1/2 '
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold w-[90%] mx-auto pt-20">Skills</h2>
      <div className='w-[90%] mx-auto pb-10'>
        <div className='mt-4'></div>
        <ProgressBar title="HTML" percent={90} />

        <div className='mt-4'></div>
        <ProgressBar title="CSS" percent={70} />
        <div className='mt-4'></div>
        <ProgressBar title="JS" percent={60} />
        <div className='mt-4'></div>
        <ProgressBar title="React" percent={75} />
        <div className='mt-4'></div>
        <ProgressBar title="Next JS" percent={60} />
        <div className='mt-4'></div>
        <ProgressBar title="Node JS" percent={60} />

        <div className='mt-4'></div>
        <ProgressBar title="Express JS" percent={60} />

        <div className='mt-4'></div>
        <ProgressBar title="MongoDB" percent={55} />

        <div className='mt-4'></div>
        <ProgressBar title="MySQL" percent={50} />



      </div>



      <h2 className="text-3xl font-bold w-[90%] mx-auto">Projects</h2>
      <div className=' flex justify-between w-[90%] mx-auto gap-y-8 flex-wrap'>
        <Card
          title='Lets Assess'
          technologies={["React JS", "Node JS", "Typescript", "Express JS", "MongoDB"]}
          img="/letsassess.png"
          link='https://letsassess-by-pramod.netlify.app'
        />

        <Card
          title='Periapparel'
          technologies={["React JS", "Node JS", "Express JS", "MongoDB", "Firebase"]}
          img="/periapparel1.png"
          link='https://periapparel.com'
        />

        <Card
          title='Cosedge'
          technologies={["Next JS", "React JS", "Typescript", "Framer motion"]}
          img="/cosedge.png"
          link='https://cosedge.com'
        />

        <Card
          title='opnr.app'
          technologies={["React JS", "Node JS", "Express JS", "MongoDB", "Firebase"]}
          img="/opnr.png"
          link='https://www.appopener.com/'
        />

        <Card
          title='thedreadlifter'
          technologies={["React JS", "Node JS", "Express JS", "MongoDB", "Firebase"]}
          img="/dreadlifter.png"
          link='https://www.thedreadlifter.com/'
        />

        <Card
          title='Task Manager'
          technologies={["Next JS 13.4"]}
          img="/taskmanager.png"
          link='https://task-manager-by-pramod.vercel.app/'
        />

        <Card
          title='ecommerce'
          technologies={["Next JS 13.4", "Node JS", "Express JS", "firebase", "Typescript"]}
          img="/ecommerce.png"
          link='https://task-manager-by-pramod.vercel.app/'
        />

        <Card
          title='Component Library'
          technologies={["Next JS 13.4", "Next Auth"]}
          img="/library.png"
          link='https://component-library-orcin.vercel.app/'
        />

        <Card
          title='Resume'
          technologies={["React JS"]}
          img="/portfolio.png"
          link='https://pramodpant.netlify.app/'
        />




      </div>
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

export default Home
