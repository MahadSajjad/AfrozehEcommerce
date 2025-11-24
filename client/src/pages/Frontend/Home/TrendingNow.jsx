import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../../data/products'
import ProductCard from '../../../components/Products'

import Slider from "react-slick";

const TrendingNow = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
            <style>
                {`
                .slick-prev {
                    left: 33px !important;
                    z-index: 100;
                }
                .slick-next {
                    right: 35px !important;
                }
                `}
            </style>
            <div className='text-center mt-10'>
                <div className="flex items-center justify-center my-6">
                    <div className="flex-grow border-t-2 border-black m-7"></div>
                    <span className="sm-px-2 md-px-4 lg-px-8 text-xl font-bold">TRENDING NOW</span>
                    <div className="flex-grow border-t-2 border-black m-7"></div>
                </div>
                <Link to="shop">View All</Link>
                <div className='w-13 border-t border-black text-center m-auto'></div>
            </div>
            <section className="py-12 overflow-hidden">
                <div className="container mx-auto px-4 overflow-hidden">
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"> */}
                    <div className="relative">
                        <Slider {...settings}>
                            {products.map((product) => (
                                <div key={product.id} className="!px-2">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* </div> */}
            </section>
        </>
    )
}

export default TrendingNow