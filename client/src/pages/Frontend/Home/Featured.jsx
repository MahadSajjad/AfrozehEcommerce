import React from 'react'
import { Link } from 'react-router-dom'

const Featured = () => {
    return (
        <>
            <div className="flex items-center justify-center my-6">
                <div className="flex-grow border-t-2 border-black m-7"></div>
                <span className="sm-px-2 md-px-4 lg-px-8 text-xl font-bold">Featured On Ella</span>
                <div className="flex-grow border-t-2 border-black m-7"></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 p-10 gap-6 mt-2'>

                <div className="relative w-full p-2 group">
                    <div className='overflow-hidden '>

                        <img
                            src="https://www.afrozeh.com/cdn/shop/files/webresizecopy_0015_2C5A7567.jpg?v=1758356705&width=500"
                            alt="Banner"
                            className="w-full transition-transform duration-500 group-hover:scale-110"
                        />

                    </div>
                    <div className='text-center'>
                        <h1 className="text-xl md:text-2xl font-bold tracking-widest mt-6">Metropólis</h1>
                        <div className="border-t-2 text-center mx-auto m-4 border-black "></div>
                        <p className="md:text-lg max-w-lg mx-auto mb-6 text-gray-700">Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous.</p>
                        <button className="px-15 py-3 bg-black text-white hover:bg-white hover:text-black font-semibold hover:bg-gray-200 transition border border-black">Shop Now</button>
                    </div>


                </div>

                <div className="relative w-full p-2 group">
                    <div className="overflow-hidden ">
                        <img
                            src="https://www.afrozeh.com/cdn/shop/files/webresizecopy_0019_2C5A7453.jpg?v=1758356341&width=1200"
                            className="w-full transition-transform duration-500 group-hover:scale-110"
                            alt="Product"
                        />
                    </div>
                    <div className='text-center'>
                        <h1 className="text-xl md:text-2xl font-bold tracking-widest mt-6">Metropólis</h1>
                        <div className="border-t-2 text-center mx-auto m-4 border-black "></div>
                        <p className="md:text-lg max-w-lg mx-auto mb-6 text-gray-700">Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous.</p>
                        <button className="px-15 py-3 bg-black text-white hover:bg-white hover:text-black font-semibold hover:bg-gray-200 transition border border-black">Shop Now</button>
                    </div>


                </div>

                <div className="relative w-full p-2 group">
                    <div className='overflow-hidden '>

                        <img
                            src="https://www.afrozeh.com/cdn/shop/files/webresizecopy_0025_2C5A7105.jpg?v=1758356400&width=1200"
                            alt="Banner"
                            className="w-full transition-transform duration-500 group-hover:scale-110"
                        />

                    </div>
                    <div className='text-center'>
                        <h1 className="text-xl md:text-2xl font-bold tracking-widest mt-6">Metropólis</h1>
                        <div className="border-t-2 text-center mx-auto m-4 border-black "></div>
                        <p className="md:text-lg max-w-lg mx-auto mb-6 text-gray-700">Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous.</p>
                        <button className="px-15 py-3 bg-black text-white hover:bg-white hover:text-black font-semibold hover:bg-gray-200 transition border border-black">Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured