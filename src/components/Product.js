import React from 'react'

const Product = ({ path, title }) => {
    return (
        <div className='flex flex-col items-center justify-center m-8'>
            <img src={path} alt={title} className='w-[180px] h-[180px] object-cover mb-4' />
            <h2 className='text-xl font-semibold font-saira leading-8 text-black mb-2'>{title}</h2>
        </div>
    )
}

export default Product