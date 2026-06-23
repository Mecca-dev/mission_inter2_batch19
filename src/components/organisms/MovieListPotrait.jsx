
import MovieCard from '../molecules/MovieCard'

function MovieListPotrait({ title, movies}) {
  return (
    <section className="py-8 px-8 md:px-12 relative group/section text-white bg-[#181A1C]">
     
    <h2 className='text-lg md:text-2xl font-bold mb-4 tracking-wide'>
      {title}
    </h2>
    <div className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth py-2">
    {movies.map((movie) => ( <MovieCard key={movie.id} movie={movie} /> 
  ))}
    </div>

    {/* Tombol Navigasi Slider (Hanya muncul di desktop saat seksi di-hover) */}
      <button className="hidden md:flex absolute left-4 top-[55%] -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full opacity-0 group-hover/section:opacity-100 transition duration-300 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button className="hidden md:flex absolute right-4 top-[55%] -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full opacity-0 group-hover/section:opacity-100 transition duration-300 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

        </section>
        )
    }

export default MovieListPotrait