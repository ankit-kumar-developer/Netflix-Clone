import React from 'react'
import { CiCircleInfo, CiPlay1 } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-[vw] aspect-video absolute text-white pt-[18%] p-12
    md:flex md:items-center
    '>
      <div className='flex mt-2 flex-col'>
        <h1 className='text-3xl font-bold
        md:text-2xl
        lmb:text-sm
        '>{title}</h1>
        <p className='w-1/3 my-2
        md:w-60
        '>{overview}</p>
      </div>
      <div className='flex
      
      '>
        <button className='flex bg-white text-black mx-1.5 cursor-pointer items-center px-4 py-2 rounded-sm'><CiPlay1 size={18} className='mr-1
        md:
        ' /> Play</button>
        <button className='flex bg-white text-black mx-1.5 cursor-pointer items-center px-4 py-2 rounded-sm'><CiCircleInfo size={20} className='mr-1' /> Watch More</button>
      </div>
    </div>
  )
}

export default VideoTitle