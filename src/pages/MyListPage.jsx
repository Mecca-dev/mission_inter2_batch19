import { useState } from 'react'
import { seriesTopRating  } from '../data/movies'

function MyListPage() {

    const [allMovies] = useState(seriesTopRating)
    const [myList, setMyList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [activeFilter, setActiveFilter] = useState('Semua')

    function handleAdd(movie) {
        const newItem = { ...movie, status: 'Belum Ditonton'}
        setMyList([...myList, newItem])
        setShowModal(false)
    }

    function handleStatusChange(id, newStatus) {
        setMyList(
            myList.map((item) => 
            item.id === id ? { ...item, status: newStatus } : item
            )
        )
    }

    function handleDelete(id) {
        setMyList(myList.filter((item) => item.id !== id))
    }

    const availableMovies = allMovies.filter(
        (movie) => !myList.some((item) => item.id === movie.id)
    )

    const filteredList = 
    activeFilter === 'Semua'
    ? myList
    : myList.filter((item) => item.status === activeFilter)

    return (
        <div className="
        py-8 px-8 md:px-12 relative group/section
        w-full min-h-screen
        bg-cover bg-center bg-[#181A1C]
        text-white
        ">

            <div className='flex justify-between items-center mb-6'>
        <h1 className="text-lg md:text-2xl font-semibold mb-4 tracking-wide">
            Daftar Saya
        </h1>
        <button 
            onClick={() => setShowModal(true)}
            className='bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold'
            >
            + Tambah Film
        </button>
            </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
  {['Semua', 'Belum Ditonton', 'Ditonton', 'Sudah Ditonton'].map((filter) => (
    <button
      key={filter}
      onClick={() => setActiveFilter(filter)}
      className={`px-2 py-1 md:px-4 md:py-2 rounded-lg text-sm font-small md:font-medium ${
        activeFilter === filter
          ? 'bg-yellow-400 text-black'
          : 'bg-[#2a2b2c] text-white'
      }`}
    >
      {filter}
    </button>
  ))}
</div>

        {filteredList.length === 0 ? (
            <p className='text-gray-400 flex justify-center'>Tidak ada film di kategori ini.</p>
        ) : (
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'> 
                {filteredList.map((item) => (
                    <div key={item.id} className='bg-[#2a2b2c] rounded p-3'>
                        <img 
                        src={item.posterUrl}
                        alt={item.title}
                        className='w-full rounded mb-2'
                        />
                        <p className='font-semibold mb-2'>{item.title}</p>

                        <select
                          value={item.status}
                          onChange={(e) => handleStatusChange(item.id, e.target.value)}
                          className='w-full bg-[#1e1f20] text-white text-sm p-1 rounded mb-2'
                          >
                            <option value="Belum Ditonton">Belum Ditonton</option>
                            <option value="Ditonton">Ditonton</option>
                            <option value="Sudah Ditonton">Sudah Ditonton</option>
                        </select>

                        <button
                        onClick={() => handleDelete(item.id)}
                        className='w-full bg-red-600 text-white text-sm py-1 rounded'>
                            Hapus
                        </button>
                    </div>
                ))}
            </div>
        )}

        {showModal && (
            <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
             <div className='bg-[#2a2b2c] p-6 rounded w-[90%] md:w-[600px] max-h-[80vh] overflow-y-auto'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-lg font-bold'>Pilih Film</h2>
                    <button
                    onClick={() => setShowModal(false)}
                    className='text-gray-400'
                    >
                        X
                    </button>
                </div>

                {availableMovies.length === 0 ? (
                    <p className='text-gray-400'>Semua film sudah ditambahkan</p>
                ) : (
                    <div className='grid grid-cols-3 gap-4'>
                        {availableMovies.map((movie) => (
                          <div key={movie.id} className="text-center">
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      className="w-full rounded mb-1"
                    />  
                    <p className="text-sm mb-1">{movie.title}</p>
                    <button
                      onClick={() => handleAdd(movie)}
                      className="bg-yellow-400 text-black text-xs px-2 py-1 rounded w-full"
                    >
                      Tambah
                    </button>
                    </div>
                        ))} 
                    </div>
                )}
             </div>
            </div>
        )}
        </div>
    )
}

      
    

export default MyListPage