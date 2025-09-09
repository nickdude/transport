import React from 'react';
import Button from './Button';
import requestContent from '../data/requestContent';

const RequestSection = () => {
    return (
        <div className='w-full h-fit bg-darkblue py-12 px-4 md:px-12 flex flex-col md:flex-row gap-12 items-center'>
            <img src={requestContent.imagePath} alt="request-logo" className='w-[730px] mb-6' />
            <div className='w-full md:w-[510px] md:h-[228px] text-white text-lg font-normal leading-7 mb-6 px-12 flex flex-col justify-center gap-6 border-l-2 border-lightOrange'>
                <h1 className='text-[32px] font-saira font-medium leading-8'>{requestContent.title}</h1>
                <p className='text-base font-normal font-saira leading-6'>{requestContent.description}</p>
                <div className='w-full'>
                    <Button
                        text={requestContent.button.text}
                        onClick={() => console.log("Button clicked")}
                        bgColor={requestContent.button.bgColor}
                        textColor={requestContent.button.textColor}
                        border={requestContent.button.border}
                    />
                </div>
            </div>
        </div>
    );
};

export default RequestSection;
