import React, { useState } from 'react'
import Button from './Button';

const Detail = ({ product }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    return (
        <div className='w-full px-6 sm:px-10 md:px-24 pt-10 flex flex-col md:flex-row gap-8 md:gap-16 p-10 md:p-28'>
            {/* Left: Title & Button */}
            <div className='w-full md:w-1/2 flex flex-col items-start '>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-saira font-medium mb-4'>
                    {product.name}
                </h1>

                <Button
                    text={product.button.text}
                    onClick={() => console.log("Button clicked")}
                    bgColor={product.button.bgColor}
                    textColor={product.button.textColor}
                    border={product.button.border}
                    icon={product.button.icon}
                    iconPath={product.button.iconPath}
                    rightIcon={product.button.rightIcon}
                />

                {/* Optional Features / Highlights */}
                {product.features && product.features.length > 0 && (
                    <ul className='mt-6 flex flex-wrap gap-3'>
                        {product.features.map((feat, idx) => (
                            <li
                                key={idx}
                                className='bg-white text-black px-3 py-1 rounded-md text-sm shadow-sm'
                            >
                                {feat}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Right: Description */}
            <div className='w-full md:w-1/2 flex flex-col gap-4'>
                <p className='text-base sm:text-lg font-saira leading-7'>
                    {showFullDescription || product.description.length < 200
                        ? product.description
                        : `${product.description.slice(0, 200)}...`}
                </p>
                {product.description.length > 200 && (
                    <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className='text-blue-600 font-medium underline self-start'
                    >
                        {showFullDescription ? 'Show Less' : 'Read More'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Detail