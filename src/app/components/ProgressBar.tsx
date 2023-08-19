"use client"
import React, { useEffect, useState } from 'react'

type PropTypes = {
    title: string
    percent: number
}
const ProgressBar = ({ title, percent }: PropTypes) => {
    const [per, setPer] = useState(0)
    useEffect(() => {
        
        setPer(percent)
    }, [percent])
    return (
        <div className='flex items-center gap-x-2'>
            <p className='w-[100px] '>{title}</p>
            <div className='h-[10px] rounded-md bg-gray-200  w-[500px]'>
                <div
                    style={{width:`${per}%`}}
                    className={` bg-green-400 h-full rounded-md`}></div>
            </div>

        </div>
    )
}

export default ProgressBar
