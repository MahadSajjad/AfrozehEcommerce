import React from "react";
import Slider from "react-slick";


function ImagesSlider() {
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
        "https://new-ella-demo.myshopify.com/cdn/shop/files/2_4b1eebe6-d69c-44fb-9049-3c79157e90d7_185x.jpg?v=1629862526",
        "https://new-ella-demo.myshopify.com/cdn/shop/files/2_4b1eebe6-d69c-44fb-9049-3c79157e90d7_185x.jpg?v=1629862526",
        "https://new-ella-demo.myshopify.com/cdn/shop/files/2_4b1eebe6-d69c-44fb-9049-3c79157e90d7_185x.jpg?v=1629862526",
        "https://new-ella-demo.myshopify.com/cdn/shop/files/2_4b1eebe6-d69c-44fb-9049-3c79157e90d7_185x.jpg?v=1629862526",
        "https://new-ella-demo.myshopify.com/cdn/shop/files/2_4b1eebe6-d69c-44fb-9049-3c79157e90d7_185x.jpg?v=1629862526",
        "https://new-ella-demo.myshopify.com/cdn/shop/files/2_4b1eebe6-d69c-44fb-9049-3c79157e90d7_185x.jpg?v=1629862526",
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
                            <img
                                src={src}
                                alt={`Brand logo ${index + 1}`}
                                className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );

}
export default ImagesSlider;
