import React from 'react'
import { useState } from 'react'

import InputAuth from "../atoms/InputAuth"
import ButtonAuth from "../atoms/ButtonAuth"

import hiddenIcon from "/icon/hidden.png"
import noHiddenIcon from "/icon/nohidden.png"

function FormField({ label, type = 'text', placeholder, name }) {
    const [showPassword, setShowPassword] = useState(false)

    const inputType = type === 'password' && showPassword ? 'text' : type

    return (
        <div className='flex flex-col gap-2 w-full text-left'>
            <label className="text-white text-xs font-medium tracking-wide">{label}</label>

            <div className='relative w-full'>
                <InputAuth type={inputType} placeholder={placeholder} name={name} />


        {type === 'password' && (
            <button 
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-4 top-1/2 -translate-y-1/2
            text-[#C1C2C4] hover:text-white
            transition'
            >
            {showPassword ? (
                <img src={hiddenIcon} alt='Hide password' className='w-5 h-5 opacity-70 hover:opacity-100 transition-opacity invert'/>
            ) : (
                <img src={noHiddenIcon} alt='Show password' className='w-5 h-5 opacity-70 hover:opacity-100 transition-opacity invert'/>
            )}
            </button>
        )}
            </div>
        </div>
    )
}

export default FormField