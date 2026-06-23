import React from 'react';

export default function Badge({ text, variant = 'primary' }) {
  // Menentukan warna berdasarkan jenis/variant badge
  const badgeStyles = {
    premium: 'bg-yellow-500 text-black font-bold',
    top10: 'bg-red-600 text-white font-extrabold',
    newEpisode: 'bg-blue-600 text-white font-semibold',
  };

  return (
    <span className={`text-[10px] px-2 py-0.5 rounded shadow-md uppercase tracking-wider ${badgeStyles[variant]}`}>
      {text}
    </span>
  );
}