import React from 'react'
import Header from '../../components/Header/index'
import Footer from "../../components/Footer/index";
import Home from './Home/index';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails';

const Frontend = () => {
    return (
        <>
            <Header />
            <main className='min-h-screen'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Frontend