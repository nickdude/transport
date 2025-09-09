import React from 'react'
import HeroSection from './components/HeroSection'
import Finalize from './components/Finalize'
import whyData from './data/whyData'
import UspSection from './components/UspSection'
import Detail from './components/Detail'
import detailData from './data/detailData'

const ServicePage = () => {
    return (
        <>
            <HeroSection label="Our Services" />
            <Detail product={detailData} />
            <Finalize title={whyData.title} description={whyData.description} buttons={whyData.buttons} />
            <div className='w-full h-fit bg-lightGray py-24 px-2 md:px-24'>
                <UspSection />
            </div>
        </>
    )
}

export default ServicePage