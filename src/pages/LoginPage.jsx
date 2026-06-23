import React from 'react';
import CardAuth from '../components/organisms/CardAuth';

export default function LoginPage() {
  return (
    <div 
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url('/bg/bgLogin.png')` }}
    >
      
      <CardAuth type="login" />
    </div>
  );
}