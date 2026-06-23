import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import MyListPage from '../pages/MyListPage'
import HomeLayouts from '../templates/HomeLayouts'
import AuthLayout from '../templates/AuthLayout'

function AppRouter() {
    return (
        <BrowserRouter>
    <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

    <Route element={<HomeLayouts />}>
         <Route path="/home" element={<HomePage />} />
         <Route path="/mylist" element={<MyListPage />} />
    </Route>
       
    <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Route>
    
   </Routes>
   </BrowserRouter>
    )
}

export default AppRouter