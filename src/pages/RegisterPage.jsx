import CardAuth from "../components/organisms/CardAuth"

function RegisterPage() {
    return (
        <div 
        className="
        w-full min-h-screen
        bg-cover bg-center 
        flex items-center justify-center"
        style={{ backgroundImage: `url('/bg/bgRegister.png')` 
      }} >
        <CardAuth type="register"/>
        </div>
    )
}

export default RegisterPage