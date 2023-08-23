import React from 'react'

type propTypes={
    children:string
}
const Heading = ({children}:propTypes) => {
  return (
    <h2 className='text-3xl font-bold  pt-20 text-center mt-20 mb-10 uppercase'>
      {children}
    </h2>
  )
}

export default Heading
