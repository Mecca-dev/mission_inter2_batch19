import React, { useState } from 'react';

// 1. Siapkan datanya dulu di atas agar rapi
const GENRES = ["Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama", "Komedi", "Petualangan", "Perang", "Romantis", "Sains & Alam", "Thriller"];
const BANTUAN = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

function FooterNavigation() {
  // State untuk membuka/menutup accordion di versi mobile
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full text-white">
      
      <div className="block md:hidden space-y-4 mx-4">
        {/* Accordion Genre */}
        <div className="border-b border-zinc-800 pb-4">
          <button 
            onClick={() => toggleSection('genre')} 
            className="flex justify-between items-center w-full py-2 text-left font-medium"
          >
            <span>Genre</span>
            {/* Icon Panah (Chevron) */}
            <span className={`transform transition-transform ${openSection === 'genre' ? 'rotate-90' : ''}`}>&gt;</span>
          </button>
          {openSection === 'genre' && (
            <ul className="grid grid-cols-2 gap-2 pt-2 text-zinc-400 text-sm pl-2">
              {GENRES.map((item) => <li key={item}><a href="#">{item}</a></li>)}
            </ul>
          )}
        </div>

        {/* Accordion Bantuan */}
        <div className="border-b border-zinc-800 pb-4">
          <button 
            onClick={() => toggleSection('bantuan')} 
            className="flex justify-between items-center w-full py-2 text-left font-medium"
          >
            <span>Bantuan</span>
            <span className={`transform transition-transform ${openSection === 'bantuan' ? 'rotate-90' : ''}`}>&gt;</span>
          </button>
          {openSection === 'bantuan' && (
            <ul className="space-y-2 pt-2 text-zinc-400 text-sm pl-2">
              {BANTUAN.map((item) => <li key={item}><a href="#">{item}</a></li>)}
            </ul>
          )}
        </div>
      </div>

      <div className="hidden md:flex gap-16 justify-between w-full">
        {/* Kolom Genre Desktop */}
        <div className="flex-1">
          <h4 className="font-semibold mb-4">Genre</h4>
          <ul className="grid grid-cols-4 gap-x-8 gap-y-3 text-zinc-400 text-sm">
            {GENRES.map((item) => (
              <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Kolom Bantuan Desktop */}
        <div className="w-48">
          <h4 className="font-semibold mb-4">Bantuan</h4>
          <ul className="space-y-3 text-zinc-400 text-sm">
            {BANTUAN.map((item) => (
              <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default FooterNavigation;