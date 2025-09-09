import React from 'react'

const RoundButton = ({ label }) => {
    return (
        <button className='bg-white text-black rounded-3xl font-saira text-sm font-medium px-3 py-2 gap-1 flex items-center hover:bg-gray-800 hover:text-white'>
            <img src="/assets/icons/check.svg" alt="whatsapp-icon" className='inline-block w-4' />
            {label}
        </button>
    )
}

export default RoundButton