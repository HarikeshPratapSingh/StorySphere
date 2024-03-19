import React from 'react'
import DefaultImage from "../Images/default-image.png"

export default function SuggestedContainer() {
  return (
    <div className='flex flex-col mb-2'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
            <img className = 'rounded-full h-10 mr-3 cursor-pointer' src={`${DefaultImage}`} alt="" />
            <p className=' font-semibold text-sm cursor-pointer'>Harikesh P. Singh</p>
            </div>
            <button className= 'bg-black text-white rounded-full h-7 w-16 text-xs hover:bg-gray-600 duration-300'>Follow</button>
        </div>
    </div>
  )
}
