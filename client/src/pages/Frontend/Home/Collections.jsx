import React from 'react'

const Collections = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-4 mt-2'>

            <div className="relative w-full p-2 group">
                <div className='overflow-hidden rounded-xl'>

                    <img
                        src="https://www.afrozeh.com/cdn/shop/files/web.psb_0012_2C5A9042.jpg?v=1760158313&width=1200"
                        alt="Banner"
                        className="w-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <h2 className=" absolute inset-0 flex items-center justify-center text-white text-xl font-bold ">NEW BRIDES EDIT '24</h2>
                </div>
            </div>

            <div className="relative w-full p-2 group">
                <div className="overflow-hidden rounded-xl">
                    <img
                        src="https://www.afrozeh.com/cdn/shop/files/webresizecopy_0046_2C5A6134.jpg?v=1758356156&width=1200"
                        className="w-full transition-transform duration-500 group-hover:scale-110"
                        alt="Product"
                    />
                </div>

                <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                    LUXURY PRET
                </h2>
            </div>

            <div className="relative w-full p-2 group">
                <div className='overflow-hidden rounded-xl'>

                    <img
                        src='https://www.afrozeh.com/cdn/shop/files/web_0034_DSC04495.jpg?v=1762752952&width=1200'
                        alt="Banner"
                        className="w-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
                        WINTER PRET '25
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default Collections
