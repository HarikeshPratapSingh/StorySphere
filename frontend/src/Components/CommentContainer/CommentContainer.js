import React from 'react'

export default function CommentContainer(props) {
    return (
        <div className='flex items-center'>
            <img className='rounded-full h-10 w-10 mr-2' src={`${props.img}`} alt="" />
            <div>
                <div className='flex'>
                    <p className='font-bold text-sm cursor-pointer mr-2'>{props.name}</p>
                    <p className='font-normal text-sm'>{props.text}</p>
                </div>
                <p className='text-xs'>{props.time}</p>
            </div>

        </div>
    )
}
