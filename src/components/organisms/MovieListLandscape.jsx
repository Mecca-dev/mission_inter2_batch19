import React from 'react'
import MovieCard from '../molecules/MovieCard'

function MovieListLandscape ({title, movies}) {
   return (
    <section className=" px-8 md:px-12 relative group/section text-white bg-[#181a1c]">

        <h2 className='text-lg md:text-2xl font-bold mb-4 tracking-wide'>
        {title}
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth py-2">
        {movies.map((movie) => 
            (<MovieCard key={movie.id} movie={movie} variant="landscape"/>
            ))}
    
        </div>
        
    </section>
    )
}

export default MovieListLandscape