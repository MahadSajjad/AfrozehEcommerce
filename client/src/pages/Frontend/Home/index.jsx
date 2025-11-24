import React from 'react'
import HeroBanner from './HeroBanner'
import Collections from './Collections'
import NewArrivals from './NewArrivals'
import MiddleBanner from './MiddleBanner'
import TrendingNow from './TrendingNow'
import Featured from './Featured'
import ImagesSlider from './ImagesSlider'
import ImagesGallery from './ImagesGallery'

const index = () => {
    return (
        <>
            <HeroBanner />
            <Collections />
            <NewArrivals />
            <MiddleBanner />
            <TrendingNow />
            <Featured />
            {/* <ImagesSlider /> */}
            <ImagesGallery />
        </>
    )
}

export default index