import NavLink from '../atoms/Navlink'

const menuItems = [
    { label: "Series", href: "/series"},
    { label: "Film", href: "/film"},
    { label: "Daftar Saya", href: "/daftar"},
]

function NavMenu(){
    return (
        <ul className='flex gap-6 '>
            {menuItems.map((item) =>( 
                <NavLink key={item.label} label={item.label} href={item.href} />
                ))}

        </ul>
    )
}
export default NavMenu 