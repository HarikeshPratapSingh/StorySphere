import React from 'react'
import Logo from '../Images/logo.png'
import LogoText from '../Images/logo-text-nobg.png'
import DefaultImage from '../Images/default-image.png'
import NavContainer from '../NavContainer/NavContainer'
import FeedIcon from '../Images/feed-icon.png'
import MessageIcon from '../Images/message-icon.png'
import FriendsIcon from '../Images/friends-icon.png'
import SettingsIcon from '../Images/settings-icon.png'
import SearchIcon from '../Images/search-icon.png'


export default function LeftContainer() {
  return (
    <div className='h-screen w-1/4 p-12 fixed' >
        <div className='flex flex-col h-3/4'>
          <div className='h-1/3 flex flex-col items-center'>
            <img className='rounded-full h-1/2' src={`${DefaultImage}`} alt="" />
            <p className='font-semibold'>Harikesh</p>
            <p className=' font-thin text-sm'>@harikeshthepeasant</p>
          </div>
            <div className='flex flex-col h-2/3 justify-center'>
              <NavContainer text='Post Feed' icon={FeedIcon}/>
              <NavContainer text='Search' icon={SearchIcon}/>
              <NavContainer text='Messages' icon={MessageIcon}/>
              <NavContainer text='Notifiations' icon={FriendsIcon}/>
              <NavContainer text='Settings' icon={SettingsIcon}/>
            </div>
            
        </div>
        <div className='h-1/4 w-full flex flex-col justify-center items-center cursor-pointer'>
            <img className='rounded-xl h-3/5' src={`${LogoText}`} alt="" />
            {/* <p className='font-semibold text-sm mt-8'>Download the App</p> */}
        </div>
    </div>
  )
}
