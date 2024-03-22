import React, { useState, useEffect } from 'react';
import PostContainer from '../PostContainer/PostContainer';
import TempImage from '../Images/default-image.png'
import EmojiIcon from '../Images/emoji-icon.png';
import ImageIcon from '../Images/image-icon.png';
import CrossIcon from '../Images/cross-icon.png'
import PostImage from '../Images/story-image.jpg';
import EmojiPicker from 'emoji-picker-react';


export default function CenterContainer() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [text, setText] = useState('');
  

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleImageClick = () => {
    document.getElementById('image-upload').click();
  };

  const handleImageCross = () => {
    setSelectedImage(null);
    document.getElementById('image-upload').value = '';
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

  const handlePost = () => {

    setSelectedImage(null)
    document.getElementById('image-upload').value = '';
    setText('')
  };

  return (
    <div className='flex' >
      <div className='h-screen w-1/4' ></div>
      <div className='h-screen w-1/2 flex flex-col' >
        <div className='flex w-full bg-white justify-between items-center pt-12 pb-7 sticky top-0 z-20'>
          <div className='text-2xl font-medium'>Feeds</div>
          <div className='flex items-center gap-2 h-full justify-between text-sm font-medium'>
            <p className='text-gray-400 cursor-pointer'>Recents</p>
            <p className='cursor-pointer'>Friends</p>
            <p className='text-gray-400 cursor-pointer'>Popular</p>
          </div>
        </div>
        <div className=' bg-gray-200 rounded-2xl p-5 mb-5 relative' >
          <div className='flex flex-col items-center'>
            <div className='flex w-full justify-center'>
              <div className='flex h-10 bg-white w-10 rounded-l-full items-center'>
                <img className='rounded-full h-8 w-8 ml-1' src={`${TempImage}`} alt="" />
              </div>
              <input type="text" placeholder='Share post' value={text} onChange={(e) => {setText(e.target.value)}} className='w-11/12 h-10 mb-4 px-2' />
              <button className='h-10 bg-white w-10 rounded-r-full' onClick={handleEmojiPicker}><img className='rounded-full h-8 w-8' src={`${EmojiIcon}`} alt="" /></button>
            </div>
            { 
              showEmojiPicker &&
              <div className='flex w-full justify-end absolute z-10 mt-12'>
              <EmojiPicker onEmojiClick={handleEmojiClick}/>
              </div>
            }
            <div className='flex w-full items-center justify-between'>
              <div className='flex justify-between items-center ml-1 cursor-pointer' onClick={handleImageClick}>
                <img className='h-8' src={`${ImageIcon}`} alt="" />
                <p className='text-xs font-bold ml-2'>Image</p>
              </div>
              <button className='bg-black text-white rounded-full h-10 w-24 hover:bg-gray-600 duration-300' onClick={handlePost}>Post</button>
            </div>
          </div>
          {selectedImage && <div className='flex flex-col items-center justify-center my-5'>
            <img src={`${URL.createObjectURL(selectedImage)}`} alt="" />
            <div className='cursor-pointer' onClick={handleImageCross}><img className='h-7 mt-2' src={`${CrossIcon}`} alt="" /></div>
          </div>
          }
        </div>
        <div>
          <PostContainer />
          <PostContainer />
        </div>

      </div>
      
      <input type="file" id='image-upload' accept="image/*" className='hidden' onChange={(e)=>handleImageUpload(e)}/>
    </div>
  )
}
