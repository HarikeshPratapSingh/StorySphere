import React from 'react'
import PostContainer from '../PostContainer/PostContainer'
export default function CenterContainer() {
  return (
    <div className='flex'>
      <div className='h-screen w-1/4'></div>
      <div className='h-screen w-1/2 flex flex-col'>


        <div className='flex w-full bg-white justify-between items-center mt-12 mb-7'>
          <div className='text-2xl font-medium'>Feeds</div>
          <div className='flex items-center gap-2 h-full justify-between text-sm font-medium'>
            <p className='text-gray-400 cursor-pointer'>Recents</p>
            <p className='cursor-pointer'>Friends</p>
            <p className='text-gray-400 cursor-pointer'>Popular</p>
          </div>
        </div>
        <div className=' bg-gray-200 rounded-2xl p-5 mb-5'>
          <div className='flex flex-col items-center'>
            <div className='flex w-full'>
              <div className='h-10 bg-white w-1/12'></div>
              <input type="text" placeholder='Share post' className='w-10/12 h-10'/>
              <button className='h-10 e'></button>
            </div>
            <div className='flex'>
              <p>a</p>
              <p>b</p>
            </div>
          </div>
        </div>
        <div>
          <PostContainer />
          <PostContainer />
        </div>

      </div>
    </div>
  )
}
