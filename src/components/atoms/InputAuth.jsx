import React from 'react'

function InputAuth({ type = "text", placeholder, name, ...props }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className='w-full bg-[#22252A]/70  
            border border-gray-600 rounded-3xl
            px-4 py-3 
            text-white text-sm
            placeholder-gray-500
            focus:outline-none focus:border-blue-500 transition-colors'
            {...props}
            />
    )
}

export default InputAuth