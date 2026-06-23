import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div className="auth-layout-container">
        <Outlet />
        </div>
    )
}

export default AuthLayout