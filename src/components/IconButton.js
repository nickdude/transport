import React from 'react'

const IconButton = ({ path }) => {
    return (
        <div className='bg-orange rounded-md p-4 flex justify-center items-center w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-300'>
            <img src={path} alt="icon" className='inline-block cursor-pointer w-4 h-4' />
        </div>
    )
}

export default IconButton