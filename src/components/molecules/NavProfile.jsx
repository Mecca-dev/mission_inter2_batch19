import { useState } from 'react'
import Avatar from '../atoms/Avatar'

function NavProfile({src}) {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return(
        
    <div className='relative inline-block text-left'>

        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleDropdown}>

            <Avatar src={src} className=""/>

            <img 
            src="/arrow/arrow-down.png" 
            alt="memuat" 
            className={`w-4 h-4 invert 
            -rotate-90 transition-transform duration-200
            ${isOpen ? 'rotate-0' : '-rotate-90'}`}/>
        </div>

        {isOpen && (
        <div className='absolute right-0 mt-3 w-28 md:w-30 text-white bg-[#181A1C] rounded-md shadow-lg py-2 z-999999 border border-gray-900 '>
            <a href="/login" className="block px-4 py-2 text-sm hover:text-blue-600">Login</a>
            <a href="/register" className="block px-4 py-2 text-sm hover:text-blue-600">Registrasi</a>
            <a href="/mylist" className="block px-4 py-2 text-sm hover:text-blue-600">Daftar Saya</a>
        </div>
        )}

    </div>
    )
}

export default NavProfile