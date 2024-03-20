import React from 'react'
import PostContainer from '../PostContainer/PostContainer'
import TempImage from '../Images/default-image.png'
import EmojiIcon from '../Images/emoji-icon.png'
export default function CenterContainer() {
  return (
    <div className='flex'>
      <div className='h-screen w-1/4'></div>
      <div className='h-screen w-1/2 flex flex-col '>


        <div className='flex w-full bg-white justify-between items-center pt-12 pb-7 sticky top-0'>
          <div className='text-2xl font-medium'>Feeds</div>
          <div className='flex items-center gap-2 h-full justify-between text-sm font-medium'>
            <p className='text-gray-400 cursor-pointer'>Recents</p>
            <p className='cursor-pointer'>Friends</p>
            <p className='text-gray-400 cursor-pointer'>Popular</p>
          </div>
        </div>
        <div className=' bg-gray-200 rounded-2xl p-5 mb-5'>
          <div className='flex flex-col items-center'>
            <div className='flex w-full justify-center'>
              <div className='flex h-10 bg-white w-10 rounded-l-full items-center'> 
                <img className='rounded-full h-8 w-8 ml-1' src={`${TempImage}`} alt="" />
                
              </div>
              <input type="text" placeholder='Share post' className='w-11/12 h-10 mb-4 px-2'/>
              <button className='h-10 bg-white w-10 rounded-r-full'><img className='rounded-full h-8 w-8' src={`${EmojiIcon}`} alt="" /></button>
            </div>
              <div className='flex w-full items-center justify-between'>
              <div className='flex w-1/2 justify-between'>
              <p>image</p>
              </div>
              <button className= 'bg-black text-white rounded-full h-10 w-24 hover:bg-gray-600 duration-300'>Post</button>
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
