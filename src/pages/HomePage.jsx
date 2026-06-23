import MovieListPotrait from '../components/organisms/MovieListPotrait'
import MovieListLandscape from '../components/organisms/MovieListLandscape'
import HeroSection from '../components/molecules/HeroSection'
import {seriesLandscape, seriesTopRating, seriesTrending, seriesNew} from '../data/movies'

function HomePage() {
    return(
<>
    <main>

        <HeroSection />
        {/* bisa mulai taruh disini untuk yang Landscape */}
        <div>
       <MovieListLandscape title="Melanjutkan Tonton Film" movies={seriesLandscape}/>
        </div>

{/* Bisa mulai ditaruh disini untuk yang potrait */}
<div className='bg-[#181A1C] min-h-screen '>

        <MovieListPotrait 
        title="Top Rating Film dan Series Hari ini"
        movies={seriesTopRating}
        />

        <MovieListPotrait 
        title="Film Trending"
        movies={seriesTrending}
        />

        <MovieListPotrait 
        title="Rilis Baru"
        movies={seriesNew}
        />
            </div>    

    </main>

 </>
)
}

export default HomePage