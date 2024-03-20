import React, { useState } from 'react'
import DefaultImage from "../Images/default-image.png"
import MoreIcon from "../Images/more-icon.png"
import PostImage from "../Images/post-image.jpg"
import Heart from "../Images/heart.png"
import View from "../Images/view-icon.png"
import Comment from "../Images/comment-icon.png"
import EmojiIcon from "../Images/emoji-icon.png"
export default function PostContainer() {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }

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
            <img className='rounded-2xl' src={`${PostImage}`} alt="" />
            <div className='flex mt-3 text-gray-1 space-x-5' >
                <div className='flex space-x-1'>
                    <img className='h-6 cursor-pointer' src={`${View}`} alt="" />
                    <p>292k</p>
                </div>
                <div className='flex space-x-1 cursor-pointer' >
                    <img className='h-6' src={`${Heart}`} alt="" />
                    <p>66k</p>
                </div>
                <div className='flex space-x-1 cursor-pointer' onClick={handleShow}>
                    <img className='h-6' src={`${Comment}`} alt="" />
                    <p>34k</p>
                </div>
            </div>

            {show === true ?
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <div className='flex justify-center mt-5 w-10/12'>
                            <div className='flex h-10 bg-white w-10 rounded-l-full items-center'>
                                <img className='rounded-full h-8 w-8 ml-1' src={`${DefaultImage}`} alt="" />
                            </div>
                            <input type="text" placeholder='Comment' className='w-11/12 h-10 mb-4 px-2' />
                            <button className='h-10 bg-white w-10 rounded-r-full'><img className='rounded-full h-8 w-8' src={`${EmojiIcon}`} alt="" /></button>
                        </div>
                        <button className='bg-black text-white rounded-full h-10 w-24 hover:bg-gray-600 duration-300'>Post</button>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center'>
                            <img className='rounded-full h-10 w-10 mr-2' src={`${DefaultImage}`} alt="" />
                            <div>
                                <div className='flex'>
                                    <p className='font-bold text-sm cursor-pointer mr-2'>Harikesh Pratap Singh</p>
                                    <p className='font-normal text-sm'> Hey shawty</p>
                                </div>
                                <p className='text-xs'>10 mins ago</p>
                            </div>

                        </div>

                        <div className='flex items-center'>
                            <img className='rounded-full h-10 w-10 mr-2' src={`${DefaultImage}`} alt="" />
                            <div>
                                <div className='flex'>
                                    <p className='font-bold text-sm cursor-pointer mr-2'>Harikesh Pratap Singh</p>
                                    <p className='font-normal text-sm'> It's your birthday</p>
                                </div>
                                <p className='text-xs'>10 mins ago</p>
                            </div>

                        </div>
                    </div>

                </div>
                : ''
            }



        </div>
    )
}
