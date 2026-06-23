import NavMenu from '../molecules/NavMenu'
import NavProfile from '../molecules/NavProfile'
import Logo from '../atoms/Logo'



function Navbar () {
    return (
    <header>
        <nav className='bg-[#181A1C] flex justify-between items-center
        px-4 py-3 
        md:px-8 md:py-6'>

        <div className='flex items-center gap-2'>
        <Logo src="/logo/logo.png" alt="CHILL" id="logo" 
        className="hidden md:block 
        h-6 lg:h-9
        md:mr-5
        "/>

        <Logo src="/logo/logoSmall.png" alt="chill mobile" id="chill-mobile" 
        className="h-6 w-6 
        object-cover
        mr-1
        md:hidden"/>
        <NavMenu />
        </div>

        <NavProfile src="/profile/profile1.png" />

        </nav>

    </header>
    )
}

export default Navbar