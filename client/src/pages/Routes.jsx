import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Dashboard from './Dashboard'
import Auth from './Auth'

const index = () => {
    return (
        <Routes>
            <Route path='/*' element={<Frontend />}></Route>
            <Route path='dashboard/*' element={<Dashboard />}></Route>
            <Route path='auth/*' element={<Auth />}></Route>
        </Routes>
    )
}
export default index