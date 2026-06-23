import { Outlet } from 'react-router-dom'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'

export default function HomeLayouts() {
    return (
        <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main  className="">
            <Outlet/>
        </main>
        <Footer className="footer" />
        </div>
    )

}