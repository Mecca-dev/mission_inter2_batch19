import React from 'react'
import FormField from "../molecules/FormField"
import ButtonAuth from '../atoms/ButtonAuth'

export default function CardAuth({ type = 'register' }) {
  const isRegister = type === 'register';

  return (
    <div className="w-full max-w-[450px] bg-[#181A1C]/80 backdrop-blur-md border border-gray-800 rounded-2xl p-8 md:p-10 text-center shadow-2xl">
      {/* Logo & Judul */}
      <div className="flex justify-center items-center mb-6">
        <img src='/logo/logo.png'/>
      </div>
      
      <h2 className="text-white text-xl font-bold mb-1">
        {isRegister ? 'Daftar' : 'Masuk'}
      </h2>
      <p className="text-gray-400 text-xs mb-6">
        {isRegister ? 'Selamat datang!' : 'Selamat datang kembali!'}
      </p>

      {/* Form Form Fields */}
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <FormField label="Username" type="text" placeholder="Masukkan username" name="username" />
        <FormField label="Kata Sandi" type="password" placeholder="Masukkan kata sandi" name="password" />
        
        {/* Input Konfirmasi Kata Sandi hanya muncul di Register */}
        {isRegister && (
          <FormField label="Konfirmasi Kata Sandi" type="password" placeholder="Masukkan kata sandi" name="confirmPassword" />
        )}

        {/* Teks navigasi kecil di bawah input */}
        <div className="text-left text-xs text-gray-400 pt-1 flex justify-between">
          <span>
            {isRegister ? 'Sudah punya akun? ' : 'Belum punya akun? '}
            <a href={isRegister ? '/login' : '/register'} className="text-white font-semibold hover:underline">
              {isRegister ? 'Masuk' : 'Daftar'}
            </a>
          </span>
          {!isRegister && (
            <a href="#forgot" className="text-gray-400 hover:underline">Lupa kata sandi?</a>
          )}
        </div>

        {/* Tombol Aksi */}
        <div className="pt-4 space-y-3">
          <ButtonAuth>{isRegister ? 'Daftar' : 'Masuk'}</ButtonAuth>
          <div className="text-xs text-gray-500 font-medium">Atau</div>
          <ButtonAuth variant="google">
            {isRegister ? 'Daftar dengan Google' : 'Masuk dengan Google'}
          </ButtonAuth>
        </div>
      </form>
    </div>
  );
}