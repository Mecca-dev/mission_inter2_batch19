import React from 'react'

export default function HeroSection() {
    return (

        <div className="relative w-full h-[50vh] sm:h-[65vh] md:h-[85vh] bg-[#181A1C] overflow-hidden">
            <img
            src="/bg/hero2.png"
            alt="Spider-Man: Miles Morales"
            className="w-full h-full object-cover object-top brightness-[0.8]"
            />

            <div className="absolute inset-0 bg-linear-to-t
            from-[#181A1C] via-black/30 to-transparent
            flex flex-col justify-end
            px-8 pb-12
            md:px-12 md:pb-20
            ">

             <div className='max-w-xl md:max-w-2xl space-y-4 text-white'>
                <h1 className="text-3xl md:text-5xl font-semibold tracking-wide drop-shadow-lg animate-fade-in">Spider-Man: Miles</h1>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed drop-shadow-md line-clamp-3">
            Di tengah ribuan versi Spider-Man dari seluruh multiverse,
             Miles Morales harus membuktikan bahwa menjadi pahlawan bukan
              tentang mengikuti takdir, melainkan menciptakan jalanmu sendiri.
                </p>
             
            <div className="flex items-center gap-3 pt-2">
            {/* Tombol Mulai */}
            <button className="bg-blue-800 hover:bg-blue-900 transition duration-300 text-white 
            font-semibold text-xs md:text-sm 
            px-1.5 py-1.5
            md:px-6 md:py-2.5
            rounded-full shadow-md flex items-center gap-2">
              Mulai
            </button>

            {/* Tombol yang selengkapnya */}
            <button className="bg-[#22252A]/80 hover:bg-[#2F333A] transition duration-300
             text-white font-semibold text-xs md:text-sm 
             px-2 py-1.5
            md:px-6 md:py-2.5
             rounded-full shadow-md border border-gray-600/50 
             flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063 1.063l-.041.02a.75.75 0 01-1.063-1.063zM12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5z" />
              </svg>
              Selengkapnya
            </button>

            <span className="border border-gray-500 text-gray-300 
            text-xs 
            px-1 py-1.5
            md:px-2 md:py-2.5
            rounded-full bg-black/20 
            font-medium">
              18+
            </span>
             </div> {/* tombol aksi? */}

             </div> {/* div judul dan deks */}

              <div className="absolute bottom-12 right-5 md:bottom-20 md:right-12 ">
        <button className="
        px-1 py-1.5
            md:px-2 md:py-2.5
         bg-black/40 hover:bg-black/60 hover:border-white
        rounded-full text-white border border-gray-600/50 
        transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3V9z" />
          </svg>
        </button>
        </div>

            </div> {/* contain all assets*/}

        </div>  
    )
}