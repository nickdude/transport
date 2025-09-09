import React from 'react'

const Button = ({ text, onClick, bgColor, textColor, border, icon = false, iconPath = "", rightIcon = false }) => {
    return (
        <button
            className={`bg-${bgColor} text-${textColor} ${border} 
            px-6 h-12 rounded-md font-inter text-sm font-medium hover:bg-gray-800 hover:text-white`}
            onClick={onClick}>
            {icon && !rightIcon && <img src={iconPath} alt="" className='inline-block mr-2' />}
            {text}
            {icon && rightIcon && <img src={iconPath} alt="" className='inline-block ml-2' />}
        </button>
    )
}

export default Button