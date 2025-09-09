import React from 'react'

const Usp = ({ icon, label, description }) => {
    return (
        <div className="p-6 flex flex-col items-left">
            <img src={icon} alt={label} className='w-[52px] h-[52px] object-cover rounded-md' />
            <hr className='border-gray-300 my-6' />
            <h2 className='text-2xl font-semibold font-saira text-black mb-2'>{label}</h2>
            <p className='text-black font-normal text-left'>{description}</p>
        </div>
    )
}

export default Usp