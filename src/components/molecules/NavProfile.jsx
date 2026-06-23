import Avatar from '../atoms/Avatar'

function NavProfile({src}) {
    return(
    
        <div className="flex items-center gap-2 cursor-pointer">
            <Avatar src={src} className=""/>
            <img src="/arrow/arrow-down.png" alt="memuat" className="w-4 h-4 invert"/>
        </div>
        
    )
}

export default NavProfile