import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResponsiveSlider() {
    const [deviceType, setDeviceType] = useState("desktop");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) setDeviceType("mobile");
            else if (window.innerWidth <= 1024) setDeviceType("tablet");
            else setDeviceType("desktop");
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const images = {
        desktop: [
            "https://www.afrozeh.com/cdn/shop/files/live_now_76d309c8-ec0a-4da7-a7fc-0f29f0018bba.jpg?v=1762770874&width=1950",
            "https://www.afrozeh.com/cdn/shop/files/web-banner_7efc1266-43dc-4f12-bf2a-49dc62a82562.jpg?v=1759403236&width=1950",
            "https://www.afrozeh.com/cdn/shop/files/Untitled-2_0002_live-now.jpg?v=1757595105&width=1950",
            "https://www.afrozeh.com/cdn/shop/files/Untitled-2_0000_Layer_1.jpg?v=1757595344&width=1950",
        ],
        tablet: [
            "https://www.afrozeh.com/cdn/shop/files/live_now_76d309c8-ec0a-4da7-a7fc-0f29f0018bba.jpg?v=1762770874&width=1950",
            "https://www.afrozeh.com/cdn/shop/files/web-banner_7efc1266-43dc-4f12-bf2a-49dc62a82562.jpg?v=1759403236&width=1950",
            "https://www.afrozeh.com/cdn/shop/files/Untitled-2_0002_live-now.jpg?v=1757595105&width=1950",
            "https://www.afrozeh.com/cdn/shop/files/Untitled-2_0000_Layer_1.jpg?v=1757595344&width=1950",
        ],
        mobile: [
            "https://www.afrozeh.com/cdn/shop/files/live_now_b39ee440-13d8-4526-8631-491136bea013.jpg?v=1762770916&width=1350",
            "https://www.afrozeh.com/cdn/shop/files/Untitled-1_0002_live-now-la-fuchsia.jpg?v=1757595166&width=1500",
        ], 
    };

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images[deviceType].map((src, index) => (
                    <div key={index}>
                        <img
                            src={src}
                            alt={`Banner ${index}`}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ResponsiveSlider;
