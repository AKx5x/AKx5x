"use client";
import { useMovieStore } from "@/state/store";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import LoadingIndex from "@/components/loading";


function MoviesPage() {

    const setTrendingMovies = useMovieStore((state) => state.setTrendingMovies)

    const router = useRouter();
    // Navigates to the movie detail page with the specified movie ID
    const handleRouter = (id: number) => {
        useMovieStore.setState({ movieId: id })
        router.push(`/movieDetail/${id}`)
    }

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


    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    const trendingMovies = useMovieStore((state) => state.trendingMovies)
    const filterState = useMovieStore((state) => state.filterState);


    return (
        <div>
            {isLoading && <LoadingIndex />}

            {!isLoading && (
                <div className="min-h-screen mt-8 bg-black flex items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-8">
                        <h1 className="col-span-full text-left text-2xl font-bold text-white mb-4">Movies</h1>
                        {filterState.length > 0 ? (
                            filterState.map((item) => (
                                <div onClick={() => handleRouter(item.id)} key={item.id} className="flex flex-col gap-2 w-full h-full cursor-pointer">
                                    <img src={`https://www.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path}`} className="hover:translate-x- hover:-translate-y-1 delay-50 duration-100 w-full rounded-md" />
                                    <a className="hover:text-gray-500 text-gray-200 font-semibold text-lg truncate">
                                        {item.title}
                                    </a>
                                    <p className="hover:text-gray-500 text-sm text-gray-400"> {item.vote_average} IMDB </p>
                                    <div className="flex flex-row flex-wrap gap-2">
                                        <p className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> {item.original_language} </p>
                                        <p className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> {item.popularity} </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            trendingMovies.map((item) => (
                                <div onClick={() => handleRouter(item.id)} key={item.id} className="flex flex-col gap-2 w-full h-full cursor-pointer">
                                    <img src={`https://www.themoviedb.org/t/p/w500_and_h282_face${item.backdrop_path}`} className="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100 w-full rounded-md" />
                                    <a className="hover:text-gray-500 text-gray-200 font-semibold text-lg truncate">
                                        {item.title}
                                    </a>
                                    <p className="hover:text-gray-500 text-sm text-gray-400"> {item.vote_average} IMDB </p>
                                    <div className="flex flex-row flex-wrap gap-2">
                                        <p className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> {item.original_language} </p>
                                        <p className="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> {item.popularity} </p>
                                    </div>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            )}
        </div>
    )

}

export default MoviesPage;