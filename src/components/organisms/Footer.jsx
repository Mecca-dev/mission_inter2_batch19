import Logo from '../atoms/Logo'
import FootLogo from '../molecules/FootLogo'
import FooterNavigation from '../molecules/FooterNavigation'
function Footer() {

    return (
        <footer className="bg-[#181A1C]">
    
        <div className="mx-auto py-4 md:flex md:flex-row md:p-8 gap-8">
                <FootLogo />
                <FooterNavigation />
            </div>
        </footer>
    )
}

export default Footer