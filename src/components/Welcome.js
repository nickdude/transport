import React from 'react';
import Button from './Button';
import welcomeContent from '../data/welcomeContent';

const Welcome = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-20'>
            <div className='p-4'>
                <p className='mb-8 text-5xl font-medium font-saira flex flex-col'>
                    {welcomeContent.title}
                </p>
                <Button
                    text={welcomeContent.button.text}
                    onClick={() => console.log("Button clicked")}
                    bgColor={welcomeContent.button.bgColor}
                    textColor={welcomeContent.button.textColor}
                    border={welcomeContent.button.border}
                    icon={welcomeContent.button.icon}
                    iconPath={welcomeContent.button.iconPath}
                    rightIcon={welcomeContent.button.rightIcon}
                />
            </div>
            <div className='p-4 text-base font-normal font-saira leading-7'>
                {welcomeContent.description.map((para, index) => (
                    <p key={index} className='mb-6'>{para}</p>
                ))}
            </div>
        </div>
    );
};

export default Welcome;
