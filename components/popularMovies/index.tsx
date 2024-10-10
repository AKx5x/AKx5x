"use client";
import { useMovieStore } from '@/state/store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function PopularIndex({ label }: any) {

    const trendingMovies = useMovieStore((state) => state.trendingMovies)
    const setTrendingMovies = useMovieStore((state) => state.setTrendingMovies)

    const router = useRouter();

    const handleRouter = (id: number) => {
        useMovieStore.setState({ movieId: id })
        router.push(`/movieDetail/${id}`)
    }


    const popularMovies = trendingMovies.slice(4, 8)

    require('dotenv').config();
    useEffect(() => {

        const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: apiKey ? `Bearer ${apiKey}` : '',
            }
        };

        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(res => res.json())
            .then(data => setTrendingMovies(data.results))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filterState = useMovieStore((state) => state.filterState);
    const filterSlice = filterState.slice(4, 8)

    return (
        <div className="mt-20 ml-16 mr-16 cursor-pointer">
            <h2 className="mb-4 text-uppercase text-2xl font-semibold tracking-wider">{`${filterState.length > 0 ? '' : 'Popular Movies'}`}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filterState.length > 0 ? (
                    filterSlice.map((item) => (
                        <button onClick={() => handleRouter(item.id)} key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125 hover:z-10">
                            <img className="w-full h-48 object-cover" src={`https://www.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path}`} alt={item.title} />
                            <div className="absolute bottom-0 p-4 w-full flex flex-col justify-end bg-gradient-to-t from-transparent to-black opacity-0 hover:opacity-100 transition-opacity">
                                <div className="text-white text-xs italic">{`${item.overview.slice(0, 106)}...`}</div>
                            </div>
                        </button>
                    ))
                ) : (
                    popularMovies.map((item) => (
                        <button onClick={() => handleRouter(item.id)} key={item.id} className="overflow-hidden border rounded-lg relative shadow-md transition-transform duration-300 transform hover:scale-125 hover:z-10">
                            <img className="w-full h-48 object-cover" src={`https://www.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path}`} alt={item.title} />
                            <div className="absolute bottom-0 p-4 w-full flex flex-col justify-end bg-gradient-to-t from-transparent to-black opacity-0 hover:opacity-100 transition-opacity">
                                <div className="text-white text-xs italic">{`${item.overview.slice(0, 106)}...`}</div>
                            </div>
                        </button>
                    ))
                )}
            </div>
        </div>
    )
}

export default PopularIndex;