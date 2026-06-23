import React from 'react'

function ButtonAuth({ children, variant = 'primary', ...props }) {
    if(variant === 'google'){
         return (
        <button 
        type='button'
        className='w-full bg-transparent 
        border border-gray-600 hover:bg-white/5 
        text-white font-medium rounded-3xl
        py-2.5 text-sm
        transition
        flex items-center justify-center gap-2'
        {...props}
        >
            <img src='https://www.svgrepo.com/show/475656/google-color.svg' alt='Google' className='w-4 h-4'/>
            {children}
        </button>
    )
    }

    return (
        <button
        type='submit'
        className='w-full 
        bg-[#3D4142] hover:bg-[#4E5253]
        text-white font-semibold
        rounded-3xl 
        py-2.5
        text-sm transition
        flex items-center justify-center gap-2'
        {...props}
        >
            {children}
        </button>
        
    )
}

export default ButtonAuth