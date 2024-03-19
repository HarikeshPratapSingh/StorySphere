import React from 'react'
import DefaultImage from "../Images/default-image.png"
import MoreIcon from "../Images/more-icon.png"
import PostImage from "../Images/post-image.jpg"
import Heart from "../Images/heart.png"
import View from "../Images/view-icon.png"
import Comment from "../Images/comment-icon.png"
export default function PostContainer() {
  return (
    <div className='w-full rounded-2xl bg-beige-2 p-5 mb-5'>
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <img className='rounded-full h-12 cursor-pointer' src={`${DefaultImage}`} alt="" />
                <div className='ml-3'>
                    <p className='font-bold text-sm cursor-pointer'>Harikesh Pratap Singh</p>
                    <p className='text-xs'>10 mins ago</p>
                </div>
            </div>
            <img className='h-8 cursor-pointer' src={`${MoreIcon}`} alt="" />
        </div>
        <p className='font-normal text-sm my-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ex doloremque odio eveniet suscipit dolorum corrupti rerum odit ut tenetur qui sequi voluptates tempora cupiditate accusantium, sed voluptatem, delectus quod.
        </p>
        <img className = 'rounded-2xl' src={`${PostImage}`} alt="" />
        <div className = 'flex mt-3 text-gray-1 space-x-5' >
            <div className='flex space-x-1'>
                <img className = 'h-6 cursor-pointer' src={`${View}`} alt="" />
                <p>292k</p>
            </div>
            <div className='flex space-x-1'>
                <img className = 'h-6 cursor-pointer' src={`${Heart}`} alt="" />
                <p>66k</p>
            </div>
            <div className='flex space-x-1'>
                <img className = 'h-6 cursor-pointer' src={`${Comment}`} alt="" />
                <p>34k</p>
            </div>

        
                
        </div>
    </div>
  )
}
