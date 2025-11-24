import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [type, setType] = useState("UNSTITCHED");

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => quantity > 1 && setQuantity((prev) => prev - 1);

    return (
        <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT IMAGES */}
            <div className="flex flex-col gap-4">
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full object-cover rounded-xl shadow-lg transition"
                />

                <div className="grid grid-cols-4 gap-3">
                    {product.images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            onClick={() => setSelectedImage(img)}
                            className={`rounded-xl cursor-pointer border 
                ${selectedImage === img ? "border-black" : "border-transparent"}`}
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex flex-col gap-6">

                {/* TITLE + SHARE */}
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-semibold">{product.name}</h1>
                    <IoShareSocialOutline className="text-2xl cursor-pointer" />
                </div>

                <p className="text-gray-600 text-sm">{product.category}</p>
                <p className="text-3xl font-bold">Rs. {product.price}</p>
                <p className="text-gray-500 text-sm">(Inclusive of all taxes)</p>

                {/* TYPE SELECTION */}
                <div>
                    <p className="font-medium mb-2">TYPE</p>
                    <div className="flex gap-4">
                        {["UNSTITCHED", "STITCHED"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setType(t)}
                                className={`px-5 py-2 rounded-md border transition ${type === t ? "bg-black text-white" : "bg-white text-black border-black"
                                    }`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center w-32 border rounded-lg overflow-hidden">
                    <button onClick={decrement} className="flex-1 py-2 border-r flex justify-center">
                        <FiMinus />
                    </button>
                    <span className="flex-1 py-2 text-center">{quantity}</span>
                    <button onClick={increment} className="flex-1 py-2 border-l flex justify-center">
                        <FiPlus />
                    </button>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col gap-4 mt-4">
                    <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-3 text-lg shadow-md">
                        <FiShoppingCart /> ADD TO CART
                    </button>

                    <a
                        href={`https://wa.me/?text=I'm interested in "${product.name}"`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full border py-3 rounded-lg flex items-center justify-center gap-3 text-lg">
                        <FaWhatsapp className="text-green-600" /> ENQUIRE
                    </a>

                    <button className="w-full bg-black text-white py-3 rounded-lg text-lg shadow-md">
                        BUY IT NOW
                    </button>
                </div>

                {/* GO BACK */}
                <Link to="/" className="text-sm underline text-gray-600 hover:text-black">
                    ← Continue Shopping
                </Link>
            </div>
        </div>
    );
}
