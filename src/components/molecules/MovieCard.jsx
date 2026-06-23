
import React from 'react' 
import Badge from '../atoms/Badge'

export default function MovieCard({movie, variant = 'portrait'}) {

  const containerClass = variant === 'landscape'
      ? 'w-[200px] sm:w-[240px] md:w-[300px]'
      : 'w-[120px] sm:w-[150px] md:w-[200px]'

  const aspectClass = variant === 'landscape'
      ? 'aspect-[16/9]'
      : 'aspect-[2/3]'
    return(

        <div className={`relative ${containerClass} cursor-pointer transition-transform
        duration-300 hover:scale-105 shrink-0 rounded-lg overflow-hidden `}>

            <img 
            src={movie.posterUrl} 
            alt={movie.title}
            className={`w-full  object-cover  ${aspectClass} block`}
             />

    {movie.isPremium && (
        <div className="absolute top-2 left-2">
          <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
            Premium
          </span>
        </div>
      )}

      {movie.isTopTen && (
        <div className="absolute top-0 right-2">
          <span className="bg-red-700 text-white text-[7px] md:text-[10px] font-semibold px-0.5 py-1 md:px-1 md:py-2 rounded-tr rounded-bl shadow-md flex flex-col items-center leading-none">
            <span className="my-0.5">Top</span>
            <span>10</span>
          </span>
        </div>
      )}

      {movie.isNewEpisode && (
        <div className="absolute top-2 left-2 md:top-6 md:left-4">
          <span className="bg-blue-900 text-white text-[6px] md:text-[9px] font-semibold
          px-1 py-1 
          md:px-3.5 md:py-1.5
          rounded-md shadow-md flex flex-col items-center leading-none">
            <span>Episode Baru</span>
          </span>
        </div>
      )}
      


      
      {variant === 'landscape' && (
        <div className='absolute bottom-0 left-0 w-full
        p-3 pt-8 
        bg-linear-to-t from-black/90 via-black/50 to-transparent 
        flex justify-between items-end gap-2'>
          <span>
            {movie.title}
          </span>

        <div className='flex items-center gap-1.5 shrink-0
         px-1.5 py-0.5
         rounded
         text-[10px] md:text-xs'>
          <span>★</span>
          <span  className='font-medium'>{movie.rating}</span>
        </div>

        </div>
      )}


        </div>
    )
}