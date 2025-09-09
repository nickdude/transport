import React from 'react';
import Button from './Button';
import heroContent from '../data/heroContent';

const HeroSection = () => {
    return (
        <div className='w-full h-[575px] bg-darkblue bg-cover bg-center flex flex-col items-center justify-center'>
            <img src={heroContent.logoPath} alt="hero-logo" className='w-[540px] mb-1' />
            <h1 className='text-white text-xl leading-8 font-medium mb-8'>{heroContent.title}</h1>
            <Button
                text={heroContent.button.text}
                onClick={() => console.log("Button clicked")}
                bgColor={heroContent.button.bgColor}
                textColor={heroContent.button.textColor}
                border={heroContent.button.border}
            />
        </div>
    );
};

export default HeroSection;
