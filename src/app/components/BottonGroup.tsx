import React from 'react'

const BottonGroup = () => {
  return (
    <div className='flex justify-center mt-10'>
    <a href="https://github.com/PantPramod" target='_blank'>
      <button className=' bg-black text-white px-8 py-3 rounded-md font-bold text-xl hover:bg-gray-800 transition-all ease-in-out duration-300 w'>Github</button>
    </a>
    <a href="https://www.linkedin.com/in/pramodpant100" target='_blank' className='ml-5'>
      <button className=' bg-blue-600 text-white px-8 py-3 rounded-md font-bold text-xl hover:bg-blue-500 transition-all ease-in-out duration-300'>Linkedin</button>
    </a>
  </div>
  )
}

export default BottonGroup
