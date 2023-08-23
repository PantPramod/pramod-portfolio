import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { BiSolidDownload } from 'react-icons/bi'

const Footer = () => {
    return (
        <footer className='mt-10 bg-[#000000c0] text-white py-10'>
            <div className='w-[90%] mx-auto'>
                <p className='mt-2 text-sm'>
                    <BsFillTelephoneFill className='inline' />
                    <span className='ml-2'>+917454983028</span>
                </p>
                <p className='mt-2 text-sm'>
                    <AiTwotoneMail className="inline" />
                    <span className='ml-2'>pramodpant100@gmail.com</span>
                </p>
                <p className='mt-2 text-sm'>
                    <BsGithub className="inline" />
                    <span className='ml-2'>github.com/PantPramod</span>
                </p>
                <p className="mt-2 text-sm">
                    <BiSolidDownload className="inline" />
                    <span className='ml-2'>Resume</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
