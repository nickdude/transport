import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({ path, title, redirectTo }) => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center m-0 md:m-8' onClick={() => navigate(redirectTo)}>
            <img src={path} alt={title} className='w-[180px] h-[180px] object-cover mb-0 md:mb-4' />
            <h2 className='text-xl font-semibold font-saira leading-8 text-black mb-1'>{title}</h2>
        </div>
    )
}

export default Product