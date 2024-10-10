"use client";
import { useMovieStore } from '@/state/store';
import Link from 'next/link';
import { useEffect } from 'react';
require('dotenv').config();

function GenresIndex() {

    const genresMovies = useMovieStore((state) => state.genresMovies);
    const setGenresMovies = useMovieStore((state) => state.setGenresMovies);

    const genresSlice = genresMovies.slice(0, 6)

    useEffect(() => {

        const apiKey = process.env.NEXT_PUBLIC_REACT_APP_API_KEY;

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: apiKey ? `Bearer ${apiKey}` : '',
            }
        };

        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(res => res.json())
            .then(data => setGenresMovies(data.genres))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        console.log('genresMovies:', genresMovies);
    }, [genresMovies]);


    return (
        <div className="container mx-auto mt-8 flex items-center justify-center" >
            <div className='flex flex-wrap gap-4'>
                {genresSlice.map((item) => (
                    <Link href='/' key={item.id} className="bg-gray-800 p-4 rounded-lg text-white hover:bg-gray-900">
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default GenresIndex;