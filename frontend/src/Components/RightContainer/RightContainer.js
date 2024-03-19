import React from 'react'
import SuggestedContainer from '../SuggestedContainer/SuggestedContainer'
import StoryImage from "../Images/story-image.jpg"
import StoryImage2 from "../Images/story-image2.jpg"


export default function RightContainer() {
  return (
    <div className='h-screen w-1/4 flex flex-col p-11 fixed top-0 right-0 '>
      <div className='flex flex-col h-1/3 w-full justify-between'>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-medium'>Popular</p>
          <p className=' text-xs text-gray-1 font-semibold cursor-pointer'>See All</p>
        </div>
        <div className='flex h-4/5 w-full justify-between space-x-2'>
          <img className='rounded-2xl w-1/2 h-full cursor-pointer' src={`${StoryImage}`} alt="" />
          <img className='rounded-2xl w-1/2 h-full cursor-pointer' src={`${StoryImage2}`} alt="" />
        </div>

      </div>

      <div className='flex flex-col h-1/3 w-full py-4 pb-4'>

        <div className='flex justify-between items-center mb-4 mt-2'>
          <p className='text-2xl font-medium'>Suggested</p>
          <p className=' text-xs text-gray-1 font-semibold cursor-pointer'>See All</p>
        </div>
        <SuggestedContainer />
        <SuggestedContainer />
        <SuggestedContainer />

      </div>

      <div className='flex flex-col h-1/3 w-full justify-between'>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-medium'>Recommended</p>
          <p className=' text-xs text-gray-1 font-semibold cursor-pointer'>See All</p>
        </div>
        <div className='flex h-4/5 w-full justify-between space-x-2'>
          <img className='rounded-2xl w-1/2 h-full cursor-pointer' src={`${StoryImage2}`} alt="" />
          <img className='rounded-2xl w-1/2 h-full cursor-pointer' src={`${StoryImage}`} alt="" />
        </div>

      </div>


    </div>
  )
}
