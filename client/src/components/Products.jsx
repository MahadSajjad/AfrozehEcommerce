import { FiHeart, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const hasMultipleImages = product.images?.length > 1;

  return (
    <Link to={`/product/${product.id}`}>


      <div className="group relative  border-gray-100  overflow-hidden bg-white cursor-pointer">

        <div className="relative">


          <div className="aspect-[3/4] overflow-hidden">

            <div className="transition-transform duration-500 ease-in-out group-hover:scale-105">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out
                ${hasMultipleImages ? 'group-hover:opacity-0' : ''
                  }
              `}
              />

              {hasMultipleImages && (
                <img
                  src={product.images?.[1]}
                  alt={`${product.name} (hover view)`}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              )}
            </div>
          </div>


          {product.isBundle && (
            <span className="absolute top-0 left-0 bg-black text-white text-xs uppercase px-2 py-1 font-semibold z-10">
              Bundle
            </span>
          )}

          <div
            className="absolute top-4 right-4 flex flex-col space-y-2 z-10 pe-2 text-xl
          opacity-100 lg:opacity-0 lg:group-hover:opacity-100 
            transition-all duration-300 ease-in-out"
          >
            <button
              className="p-2 bg-white rounded-full text-gray-700 hover:text-black
                       transition-all duration-300 ease-in-out translate-x-4 group-hover:translate-x-0 delay-100"
            >
              <FiHeart />
            </button>
            <button
              className="p-2 bg-white rounded-full text-gray-700 hover:text-black
                       transition-all duration-300 ease-in-out translate-x-4 group-hover:translate-x-0 delay-200"
            >
              <FiEye />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 w-full z-10
  opacity-100 translate-y-0 
  lg:opacity-0 lg:translate-y-4 
  lg:group-hover:opacity-100 lg:group-hover:translate-y-0
  transition-all duration-300 ease-in-out bg-white/90">

            <button className="w-full text-black border border-black py-2 px-4 uppercase font-semibold text-sm hover:bg-black hover:text-white transition-colors duration-200">
              Quick Add
            </button>
          </div>
        </div>

        <div className="p-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-800">
            {product.name}
          </p>
          <p className="my-1 text-sm text-gray-500">{product.category}</p>

          <div className="flex justify-center items-baseline text-sm text-gray-500">
            from
            <span className="ml-1.5 font-bold text-black text-base">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;