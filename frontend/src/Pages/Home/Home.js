import React from 'react'
import LeftContainer from "../../Components/LeftContainer/LeftContainer"
import RightContainer from "../../Components/RightContainer/RightContainer"
import CenterContainer from "../../Components/CenterContainer/CenterContainer"
export default function Home() {
  return (
    <div className='home'>
      <div className='flex'>
        <LeftContainer/>
        <CenterContainer/>
        <RightContainer/>
      </div>
    </div>
  )
}
