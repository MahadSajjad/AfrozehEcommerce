import React from "react";
import Slider from "react-slick";


function ImagesGallery() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        swipeToSlide: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    const images = [
        "https://www.afrozeh.com/cdn/shop/files/Festive_4-6_0007_Layer_5.webp?v=1752671860",
        "https://www.afrozeh.com/cdn/shop/files/Untitled-6_0009_Layer_3.webp?v=1752151359",
        "https://www.afrozeh.com/cdn/shop/files/Festive_3-6_0006_Layer_6.webp?v=1752671819",
        "https://www.afrozeh.com/cdn/shop/files/1O9A7870.jpg?v=1755197899&width=1200",
        "https://www.afrozeh.com/cdn/shop/files/webresizecopy_0030_2C5A6909.jpg?v=1758356587&width=1200",
        "https://www.afrozeh.com/cdn/shop/files/Untitled-3_0000_1O9A7014.jpg?v=1758622276&width=1200",
    ];

    return (
        <>
            <style>
                {`
                .slick-prev {
                    left: -13px important;
                    z-index: 100;
                }
                .slick-next {
                    right: -15px important;
                }
                `}
            </style>
            <div className="slider-container relative px-8 py-6">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="flex justify-center">
                            <div className='overflow-hidden'>
                                <img
                                    src={src}
                                    alt={`Brand logo ${index + 1}`}
                                    className=" p-1  w-full transition-transform duration-500 hover:scale-105 "
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );

}
export default ImagesGallery;
