import React from 'react'

const Blog = () => {
    return (
        <a className="mt-10 w-[700px] mx-auto " href="https://medium.com/@pramodpant100/how-to-master-javascript-within-30-days-2e9b28ea98ba" target='_blank'>
            <p className='text-xs text-gray-700'>Aug 20, 2022</p>
            <div className='mt-2 flex  gap-x-8'>
                <div className=''>
                    <p className=' font-bold text-xl'>Hom to master JavaScript within 30 Days</p>
                    <p className='mt-2 text-sm text-justify'>Learn Basics for programming fundamentals such as variables, if else, loops, etc. Then Practice many questions based on these things Learn about DOM manipulation using JavaScript. Create some small projects...</p>
                </div>
                <img
                    src="https://miro.medium.com/v2/resize:fill:80:56/0*qeJZ7BgzsU47FW54"
                    alt=""
                    className='object-contain h-[100px]'
                />
            </div>

            <p className='mt-2 text-sm'>Javascript Tips <span className='ml-4'>1 min read</span></p>
        </a>
    )
}

export default Blog
