import { useEffect, useState, useRef } from "react";
import { Drawer, Modal, Input, Button } from "antd";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom'
import { products } from "../../Data/products";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [searchModalOpen, setSearchModalOpen] = useState(false);
    const [accountsDropdownOpen, setAccountsDropdownOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate()
    const dropref = useRef(null)
    const [loading, setLoading] = useState(false)


    const menuItems = [
        "NOV - WINTER PRET ‘25",
        "DASTANGOI'25",
        "SHEHNAI'25",
        "SLATE LUXURY PRET",
        "NEW ARRIVALS",
        "BEST SELLERS",
    ];

    useEffect(() => {
        const token = localStorage.getItem("token")
        const storedUser = JSON.parse(localStorage.getItem("user"))
        if (token && storedUser) {
            setIsLoggedIn(true)
            setUserData(storedUser)
        } else {
            setIsLoggedIn(false)
            setUserData(null)
        }
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (dropref.current && !dropref.current.contains(e.target)) {
                setAccountsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => { document.removeEventListener("mousedown", handler) }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUserData(null);
        setAccountsDropdownOpen(false);
    };

    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
        } else {
            const filtered = products.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered)
        }
    }, [query]);

    const handleSearch = () => setSearchModalOpen(false);

    return (
        <header className="fixed w-full top-0 z-[5000] bg-white shadow-sm">
            <div className="flex items-center justify-center py-2 pe-6 bg-white md:hidden">
                <button onClick={() => { navigate('/') }} className="text-sm font-semibold tracking-wider px-4 py-1 bg-gray-100">
                    FESTIVE
                </button>
                <button onClick={() => { navigate('/lawn') }} className="text-sm font-semibold tracking-wider text-gray-700 hover:text-black ml-4">
                    LAWN
                </button>
            </div>

            {/* Main Navbar */}
            <div className="flex items-center justify-between px-4 md:px-10 py-3">

                {/* Left (Mobile Only) */}
                <div className="flex items-center gap-4 md:hidden">
                    <HiOutlineMenuAlt3
                        size={25}
                        onClick={() => setOpen(true)}
                        className="cursor-pointer"
                    />
                    <FiSearch size={22} className="cursor-pointer" onClick={() => setSearchModalOpen(true)} />
                </div>
                {/* Desktop FESTIVE / LAWN */}
                <div className="flex  gap-6 py-2 bg-white w-xl hidden md:flex">
                    <button onClick={() => { navigate('/') }} className="text-sm font-semibold tracking-wider px-4 py-1 bg-gray-100">
                        FESTIVE
                    </button>
                    <button onClick={() => { navigate('/lawn') }} className="text-sm font-semibold tracking-wider text-gray-700 hover:text-black">
                        LAWN
                    </button>
                </div>
                {/* Center Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
                    <Link to="/">
                        <img
                            src="https://www.afrozeh.com/cdn/shop/files/afrozeh_logo_black.png?height=210&v=1759488750"
                            alt="My Logo"
                            className="h-12 md:h-14 object-contain"
                        />
                    </Link>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-5 ml-auto">
                    <FiSearch
                        size={22}
                        className="hidden md:block cursor-pointer hover:text-gray-600"
                        onClick={() => setSearchModalOpen(true)} />
                    <div ref={dropref} className="relative">
                        <FiUser
                            size={22}
                            className="cursor-pointer hover:text-gray-600"
                            onClick={() => setAccountsDropdownOpen(prev => !prev)}
                        />

                        {accountsDropdownOpen && (
                            <div className="absolute right-0 mt-4 w-70 lg:w-100 md:w-100 bg-white p-4 animate-fadeIn shadow-lg">
                                <h3 className="font-semibold text-gray-900 mb-2">Account</h3>
                                {!isLoggedIn ? (
                                    <>
                                        <button onClick={() => { navigate("/auth/login"); setAccountsDropdownOpen(false) }}
                                            className="w-full bg-black text-white py-2 rounded-sm mb-2 hover:bg-gray-800"
                                        >
                                            Sign In
                                        </button>

                                        <div className="flex gap-2">
                                            <button onClick={() => { navigate('/orders'); setAccountsDropdownOpen(false) }}
                                                className="w-1/2 bg-gray-100 text-black py-2 text-sm flex items-center justify-center gap-1"
                                            >
                                                Orders
                                            </button>
                                            <button onClick={() => { navigate('/orders'); setAccountsDropdownOpen(false) }}
                                                className="w-1/2 bg-gray-100 text-black py-2 text-sm flex items-center justify-center gap-1"
                                            >
                                                Profile
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-sm font-medium mb-2 capitalize">{userData?.fullName}</p>

                                        <button onClick={() => { handleLogout(); setAccountsDropdownOpen(false) }}
                                            className="w-full bg-black text-white py-2 rounded-sm mb-2 hover:bg-gray-800"
                                        >
                                            Logout
                                        </button>
                                        <div className="flex gap-2">
                                            <button onClick={() => { navigate('/orders'); setAccountsDropdownOpen(false) }}
                                                className="w-1/2 bg-gray-100 text-black py-2 text-sm flex items-center justify-center gap-1"
                                            >
                                                Orders
                                            </button>
                                            <button onClick={() => { navigate('/orders'); setAccountsDropdownOpen(false) }}
                                                className="w-1/2 bg-gray-100 text-black py-2 text-sm flex items-center justify-center gap-1"
                                            >
                                                Profile
                                            </button>
                                        </div>
                                    </>)}

                            </div>
                        )}

                    </div>


                    <FiShoppingBag
                        size={22}
                        className="cursor-pointer hover:text-gray-600"
                        onClick={setCartOpen.bind(this, true)}
                    />
                    <Drawer
                        closable
                        destroyOnHidden
                        title={<p>Loading Drawer</p>}
                        placement="right"
                        open={cartOpen}
                        loading={loading}
                        onClose={() => setCartOpen(false)}
                    ><div className="flex items-center text-center  justify-center h-full">

                            <p >This is cart Drawer</p>
                        </div>
                    </Drawer>
                </div>
            </div>

            {/* Desktop Menu Items */}
            <nav className="hidden md:flex justify-center gap-6 p-2 text-sm font-semibold tracking-wide text-black">
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`hover:text-gray-700 ${item === "OCTOBER - WINTER PRET ‘25" ? "text-pink-500" : ""
                            }`}
                    >
                        {item}
                    </a>
                ))}
            </nav>

            {/* Drawer for Mobile */}
            <Drawer
                placement="left"
                closable={false}
                onClose={() => setOpen(false)}
                open={open}
                width={260}>
                <div className="flex flex-col gap-4 mt-6">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`text-base font-medium ${item === "OCTOBER - WINTER PRET ‘25" ? "text-pink-500" : "text-gray-800"
                                }`}
                            onClick={() => setOpen(false)}>
                            {item}
                        </a>
                    ))}
                </div>
            </Drawer>
            <Modal
                centered
                open={searchModalOpen}
                onCancel={() => setSearchModalOpen(false)}
                onOk={handleSearch}
                okButtonProps={{ className: "bg-black text-white hover:bg-gray-800" }}
                cancelButtonProps={{ className: "hover:text-gray-700" }}
                title="Search Products"
                width={700}>
                <Input
                    size="large"
                    placeholder="Search products"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="m-2"
                    onPressEnter={handleSearch}
                />
                {/* live resu lts */}
                <div className="max-h-100 overflow-y-auto">
                    {results.length === 0 ? (<p className="text-gray-500">No products found</p>)
                        : (<div className="grid grid-col-1 md:grid-col-2 lg:grid-col-4 ">
                            {results.map((item) => (
                                <div key={item.id} className="flex items-center gap-3 border p-2 m-2 hover:shadow-md transition">
                                    <Link onClick={() => setSearchModalOpen(false)} to={`/product/${item.id}`}>

                                        <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-gray-600">${item.price}</p>
                                            {item.isBundle && <span className="text-xs text-white bg-green-500 px-1 rounded">Bundle</span>}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>)}
                </div>

            </Modal>
        </header >
    );
};

export default Navbar;