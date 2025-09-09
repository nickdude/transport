import React from 'react'
import RoundButton from './RoundButton'

const Finalize = ({ title, description, buttons }) => {
    return (
        <div className="w-full min-h-[334px] bg-paleBlue flex flex-col items-center justify-center px-8 py-10">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl mb-4 font-saira font-medium text-center">
                {title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl mb-6 font-saira font-medium leading-6 sm:leading-7 md:leading-8 text-center max-w-3xl">
                {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
                {buttons.map((button, index) => (
                    <RoundButton key={index} label={button} />
                ))}
            </div>
        </div>
    )
}

export default Finalize
