import React from 'react'

export default function NavContainer
    (props) {
    return (
        <div className='flex mb-7 h-32 rounded-xl items-center bg-gray-200 cursor-pointer'>
                <img className='h-5 mr-3 cursor-pointer ml-4' src={`${props.icon}`} alt="" />
                <p className=' font-semibold text-sm cursor-pointer'>{props.text}</p>
        </div>
    )
}
