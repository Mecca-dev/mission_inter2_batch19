
function NavLink({label, href = "#"}){
    return (
        <li>
            <a href={href}
            className="
            text-white hover:text-red-600 
            text-[12px] sm:text-lg">
                {label}
            </a>
        </li>
    )
}

export default NavLink