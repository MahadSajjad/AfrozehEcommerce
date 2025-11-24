import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../../data/products'
import ProductCard from '../../../components/Products'
const NewArrivals = () => {

    return (
        <>
            <div className='text-center'>
                <div className="flex items-center justify-center my-6">
                    <div className="flex-grow border-t-2 border-black m-7"></div>
                    <span className="sm-px-2 md-px-4 lg-px-8 text-xl font-bold">NEW ARRIVALS</span>
                    <div className="flex-grow border-t-2 border-black m-7"></div>
                </div>
                <Link to="shop">View All</Link>
                <div className='w-13 border-t border-black text-center m-auto'></div>
            </div>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewArrivals