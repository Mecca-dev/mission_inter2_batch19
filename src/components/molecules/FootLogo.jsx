import Logo from '../atoms/Logo'

function FootLogo() {
    return (
        <div className="flex items-left flex-col mx-4 lg:w-120 lg:justify-center ">
        <Logo src="/logo/logo.png" alt="chill mobile" id="chill-mobile" 
        className="w-30 h-10
        mb-3
        " />
        <p className="text-sm text-gray-300 mb-12">
            &copy; 2024 CHILL. All rights reserved.
        </p>
        </div>
    )
}

export default FootLogo