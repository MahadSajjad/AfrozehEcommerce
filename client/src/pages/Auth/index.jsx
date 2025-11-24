import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './Register'
import Login from './Login'

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path='register' element={<Register />}></Route>
                <Route path='login' element={<Login />}></Route>
            </Routes>
        </>
    )
}

export default Auth