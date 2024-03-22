import React, { useState, useEffect } from 'react';
import CommentContainer from '../CommentContainer/CommentContainer'
import DefaultImage from "../Images/default-image.png";
import MoreIcon from "../Images/more-icon.png";
import PostImage from "../Images/post-image.jpg";
import Heart from "../Images/heart.png";
import HeartLiked from "../Images/heart-liked.png";
import View from "../Images/view-icon.png";
import Comment from "../Images/comment-icon.png";
import EmojiIcon from "../Images/emoji-icon.png";
import EmojiPicker from 'emoji-picker-react';


export default function PostContainer() {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [text, setText] = useState('');
    const [showComment, setShowComments] = useState(false);
    const [likeImage, setLikeImage] = useState(Heart);
    const [likeCount, setLikeCount] = useState(10);

    const handleShow = () => {
        setShowComments(!showComment)
    };

    const handleLike = () => {
        if (likeImage === Heart) {
            setLikeImage(HeartLiked);
            setLikeCount(likeCount + 1);
        }
        else {
            setLikeImage(Heart);
            setLikeCount(likeCount - 1);
        }
    };

    const handleComment = () => {
        setText('');
    };

    const handleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (e) => {
        setText(t => t + e.emoji);
    };

    useEffect(() => {

        const handleScroll = () => {
            setShowEmojiPicker(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div className='w-full rounded-2xl bg-beige-2 p-5 mb-5' >
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
            <div className='flex w-full justify-center'>
                <img className='rounded-2xl ' src={`${PostImage}`} alt="" />
            </div>
            <div className='flex mt-3 text-gray-1 space-x-5' >
                <div className='flex space-x-1'>
                    <img className='h-6 cursor-pointer' src={`${View}`} alt="" />
                    <p>292k</p>
                </div>
                <div className='flex space-x-1 cursor-pointer' onClick={handleLike} >
                    <img className='h-6' src={`${likeImage}`} alt="" />
                    <p>{likeCount}</p>
                </div>
                <div className='flex space-x-1 cursor-pointer' onClick={handleShow}>
                    <img className='h-6' src={`${Comment}`} alt="" />
                    <p>2</p>
                </div>
            </div>

            {showComment &&
                <div className='relative'>
                    <div className='flex w-full items-center justify-between'>
                        <div className='flex justify-center mt-5 w-10/12'>
                            <div className='flex h-10 bg-white w-10 rounded-l-full items-center'>
                                <img className='rounded-full h-8 w-8 ml-1' src={`${DefaultImage}`} alt="" />
                            </div>
                            <input type="text" placeholder='Comment' value={text} onChange={(e) => { setText(e.target.value) }} className='w-11/12 h-10 mb-4 px-2' />
                            <button className='h-10 bg-white w-10 rounded-r-full' onClick={handleEmojiPicker}><img className='rounded-full h-8 w-8' src={`${EmojiIcon}`} alt="" /></button>
                        </div>
                        <button className='bg-black text-white rounded-full h-10 w-24 hover:bg-gray-600 duration-300' onClick={handleComment}>Post</button>
                    </div>

                    {
                        showEmojiPicker &&
                        <div className='flex w-full justify-end absolute z-10 '>
                            <EmojiPicker onEmojiClick={handleEmojiClick} />
                        </div>
                    }

                    <div className='flex flex-col gap-3'>
                        <CommentContainer name = 'Harikesh Pratap Singh' img = {DefaultImage} text = 'Hey Shawty' time = '10 mins ago'/>
                        <CommentContainer name = 'Harikesh Pratap Singh' img = {DefaultImage} text = "It's your Birthday" time = '10 mins ago'/>
                    </div>

                </div>
            }



        </div>
    )
}
